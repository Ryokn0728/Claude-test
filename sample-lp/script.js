// スムーススクロール
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.classList.contains('header-cta') || button.classList.contains('hero-cta')) {
            e.preventDefault();
            document.querySelector('.final-cta').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// フォーム送信処理
document.querySelector('.cta-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.email-input').value;
    
    if (email) {
        alert(`ありがとうございます！${email}宛に詳細をお送りします。`);
        document.querySelector('.email-input').value = '';
    }
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素の設定
document.querySelectorAll('.benefit-item, .testimonial-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});