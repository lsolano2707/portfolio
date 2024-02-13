import { boot } from 'quasar/wrappers';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default boot(() => {
  AOS.init({
    once: true,
    offset: 200,
    duration: 900,
    easing: 'ease-in-sine',
    delay: 150,
  });
});
