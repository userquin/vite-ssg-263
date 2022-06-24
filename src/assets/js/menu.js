import gsap from 'gsap';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
gsap.registerPlugin(MorphSVGPlugin);

function demo() {
  gsap.to('#ellipse', { duration: 2, morphSVG: '#rectangle' });
}

export { demo };
