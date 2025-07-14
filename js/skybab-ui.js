
//메뉴 

$(document).ready(function () {
	$(".menu-btn").on("click", function () {
		if ($(".pop-mask").css("display") === "none") {
			$(".menu-btn").addClass("active");
			$(".pop-mask").css("display", "block");
			$(".mobile-menu").addClass('oppenned').css("display", "block");
		} else {
			$(".menu-btn").removeClass("active");
			$(".pop-mask").css("display", "none");
			$(".mobile-menu").removeClass('oppenned').css("display", "none");
		}
	});
});

$(window).on("scroll", function () {
	if ($(".mobile-menu").hasClass("oppenned")) {
		$(".pop-mask").hide();
		$(".mobile-menu").removeClass("oppenned").hide();
		$(".menu-btn").removeClass("active");
	}
});




//브라우져 사이즈 조정시 메뉴 닫힘
$(window).resize(function () {
	var width_size = window.outerWidth;
	if (width_size > 768) {
		$(".menu-btn").removeClass("active");
		$(".pop-mask").css("display", "none");
		$(".mobile-menu").css("display", "none");
		$(".menu-btn").removeClass("active");
	}
})


//서서히 보니는 효과
document.addEventListener("DOMContentLoaded", () => {
	const sectionObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("section-visible");

				const lines = entry.target.querySelectorAll('.fade-line');
				lines.forEach((line, i) => {
					line.style.transitionDelay = `${i * 0.1}s`;
					line.classList.add("visible");
				});

				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.2
	});

	document.querySelectorAll('.section-fade').forEach(section => {
		sectionObserver.observe(section);
	});
});






//버튼
document.addEventListener("DOMContentLoaded", () => {
	const scrollTriggerBtn = document.querySelector('.btn-coupon'); // 상단 버튼
	const couponScrollTarget = document.getElementById('coupon-target');
	const popup = document.querySelector('.popup-coupon');
	const mask = document.querySelector('.popup-mask');
	const closeBtn = document.querySelector('.popup-close');

	// ① 상단 "10% 할인쿠폰 받기" 버튼 클릭 시 스크롤 이동
	if (scrollTriggerBtn && couponScrollTarget) {
		scrollTriggerBtn.addEventListener('click', (e) => {
			e.preventDefault();
			couponScrollTarget.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		});
	}

	// ② 쿠폰 영역 클릭 시 팝업 열기
	if (couponScrollTarget) {
		couponScrollTarget.addEventListener('click', () => {
			popup.style.display = 'block';
			//mask.style.display = 'block';
		});
	}

	// ③ 닫기 버튼
	if (closeBtn) {
		closeBtn.addEventListener('click', () => {
			popup.style.display = 'none';
			//mask.style.display = 'none';
		});
	}

	// ④ 마스크 클릭 시 닫기
	if (mask) {
		mask.addEventListener('click', () => {
			popup.style.display = 'none';
			mask.style.display = 'none';
		});
	}
});


document.addEventListener("DOMContentLoaded", () => {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const alreadyVisible = entry.target.classList.contains("section-visible");
      if (entry.isIntersecting && !alreadyVisible) {
        entry.target.classList.add("section-visible");

        const lines = entry.target.querySelectorAll('.fade-line');
        lines.forEach((line, i) => {
          line.style.transitionDelay = `${i * 0.1}s`;
          line.classList.add("visible");
        });

        // 다시 안 보이게 해도 관찰 종료
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section-fade').forEach(section => {
    sectionObserver.observe(section);
  });
});
