import './node_modules/normalize.css/normalize.css'
import './style.scss'

const btn = document.querySelector('.share-btn');

btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
    }
    else{
        btn.classList.add('active');
    }
});