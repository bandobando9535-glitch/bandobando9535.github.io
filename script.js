// ===== 스크롤 시 네비게이션 배경 변경 =====
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.2)';
    }
});

// ===== 부드러운 스크롤 (네비게이션 클릭 시) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== 페이지 로드 시 간단한 인사 =====
console.log('포트폴리오 웹사이트가 로드되었습니다!');
