"use client";
import { useRef, useEffect } from "react";

const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

// Fractal noise shader by Matthias Hurrle (@atzedent), adapted for SPY Pivot Pro.
const FRAG = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 pointer;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);
}
float fbm(vec2 p){
  float t=.0,a=1.;
  mat2 m=mat2(1.,-.5,.2,1.2);
  for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
  return t;
}
float clouds(vec2 p){
  float d=1.,t=.0;
  for(float i=.0;i<3.;i++){
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);d=a;p*=2./(i+1.);
  }
  return t;
}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  vec2 pnt=(pointer-.5*R)/MN;
  float pointerGlow=.055/max(length(uv-pnt),.08);
  float bg=clouds(vec2(st.x+T*.36,-st.y*.86));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.075*cos(i*vec2(.1+.01*i,.8)+i*i+T*.44+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00105/d*(cos(sin(i)*vec3(.95,1.72,2.62))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.18,bg*.11,bg*.035),d);
  }
  vec3 gold=vec3(0.94,0.67,0.16);
  vec3 cyan=vec3(0.04,0.53,0.72);
  vec3 green=vec3(0.02,0.58,0.36);
  float scan=.5+.5*sin((uv.y+uv.x*.18+T*.08)*90.);
  col+=gold*bg*.08+cyan*max(0.,sin(st.x*2.1+T*.22))*.028+green*scan*.012;
  col+=mix(cyan,gold,.45)*pointerGlow*.08;
  col*=smoothstep(1.45,.18,length((FC-.5*R)/MN));
  O=vec4(col,1);
}`;

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return; // silently fall back to CSS background

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Compile vertex shader
    const vs = gl.createShader(gl.VERTEX_SHADER);
    if (!vs) return;
    gl.shaderSource(vs, VERT);
    gl.compileShader(vs);

    // Compile fragment shader
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fs) return;
    gl.shaderSource(fs, FRAG);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      return;
    }

    // Link program
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return;
    }

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "resolution");
    const uTime = gl.getUniformLocation(prog, "time");
    const uPointer = gl.getUniformLocation(prog, "pointer");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      pointerRef.current = [canvas.width * 0.5, canvas.height * 0.48];
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const handlePointerMove = (event: PointerEvent) => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      pointerRef.current = [event.clientX * dpr, canvas.height - event.clientY * dpr];
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let raf = 0;
    let alive = true;

    const render = (t: number) => {
      if (!alive) return;
      gl.clearColor(0.02, 0.03, 0.063, 1); // matches #050810
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t * 0.001);
      gl.uniform2f(uPointer, pointerRef.current[0], pointerRef.current[1]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduced) raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      gl.deleteBuffer(buf);
      gl.detachShader(prog, vs);
      gl.detachShader(prog, fs);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-95"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
