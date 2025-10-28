// 🔧 EmailJS Contact Form Configuration
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Khởi tạo EmailJS
  emailjs.init("Cnjni5BanXi0TOM8C"); // ⚙️ Thay bằng PUBLIC KEY của bạn trong EmailJS

  // 2️⃣ Lấy phần tử form và các thành phần trong đó
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const submitBtn = form.querySelector("button[type='submit']");

  // 3️⃣ Lắng nghe sự kiện submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Ẩn thông báo cũ (nếu có)
    successMessage.style.display = "none";

    // Vô hiệu hóa nút gửi để tránh gửi nhiều lần
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;

    try {
      // 4️⃣ Gửi dữ liệu qua EmailJS
      await emailjs.send("service_1w2xls5", "template_fhnot1s", {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        subject: form.subject.value.trim(),
        message: form.message.value.trim(),
        time: new Date().toLocaleString(),
    });

      // ✅ Hiển thị thông báo thành công
      successMessage.style.display = "flex";
      form.reset();

      // Thêm hiệu ứng biến mất sau vài giây (tùy chọn)
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 4000);
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("⚠️ Failed to send message. Please try again later.");
    } finally {
      // 5️⃣ Kích hoạt lại nút gửi
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> Send Message`;
    }
  });
});
