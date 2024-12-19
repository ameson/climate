// // 导航栏滚动效果
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//         navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
//     } else {
//         navbar.style.background = 'white';
//         navbar.style.boxShadow = 'none';
//     }
// });

// // 平滑滚动
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // 动态加载报告数据
// const reports = [
//     {
//         title: "Climate Change Impact Assessment 2023",
//         description: "Analysis of climate risks in the Indian financial sector",
//         date: "December 2023",
//         image: "assets/report1.jpg"
//     },
//     {
//         title: "Renewable Energy Transition",
//         description: "Pathways for India's energy future",
//         date: "November 2023",
//         image: "assets/report2.jpg"
//     },
//     {
//         title: "Financial Risk Analysis",
//         description: "Climate change impacts on banking sector",
//         date: "October 2023",
//         image: "assets/report3.jpg"
//     }
// ];

// // 渲染报告
// function renderReports() {
//     const reportsGrid = document.querySelector('.reports-grid');
//     if (!reportsGrid) return;

//     reports.forEach(report => {
//         const reportElement = document.createElement('div');
//         reportElement.className = 'report-item fade-in';
//         reportElement.innerHTML = `
//             <img src="${report.image}" alt="${report.title}">
//             <h3>${report.title}</h3>
//             <p>${report.description}</p>
//             <span class="date">${report.date}</span>
//         `;
//         reportsGrid.appendChild(reportElement);
//     });
// }

// // 页面加载完成后初始化
// document.addEventListener('DOMContentLoaded', () => {
//     renderReports();
    
//     // 添加滚动动画
//     const observerOptions = {
//         threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);

//     // 观察所有主要部分
//     document.querySelectorAll('section').forEach(section => {
//         observer.observe(section);
//     });
// }); 




// 获取DOM元素
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// 移动端菜单切换
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // 切换菜单图标
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 点击导航链接时关闭菜单
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 监听窗口大小变化
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察所有主要部分
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});