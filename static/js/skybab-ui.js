
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


 $(document).ready(function () {
    const bgImages = [
      "../img/skybab-index01.png",
      "../img/skybab-index02.png",
      "../img/skybab-index03.png"
    ];

    let currentIndex = 0;
    const $div = $(".div-bg01");

    // 초기 설정
    $div.css("background-image", `url(${bgImages[0]})`);

    // 자동 전환
    let interval = setInterval(nextImage, 3000);

    function nextImage() {
      currentIndex = (currentIndex + 1) % bgImages.length;
      updateBackground();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length;
      updateBackground();
    }

    function updateBackground() {
      $div.fadeOut(300, function () {
        $div.css("background-image", `url(${bgImages[currentIndex]})`);
        $div.fadeIn(300);
      });
    }

    // 모바일 터치 이벤트
    let touchStartX = 0;
    let touchEndX = 0;

    $div.on("touchstart", function (e) {
      touchStartX = e.originalEvent.touches[0].clientX;
    });

    $div.on("touchend", function (e) {
      touchEndX = e.originalEvent.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;

      if (Math.abs(deltaX) > 50) {
        clearInterval(interval); // 유저가 스와이프하면 자동 슬라이드 일시 중지

        if (deltaX > 0) {
          prevImage();
        } else {
          nextImage();
        }

        // 5초 후 자동 슬라이드 재시작
        interval = setInterval(nextImage, 3000);
      }
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
