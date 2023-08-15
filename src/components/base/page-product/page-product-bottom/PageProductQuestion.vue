<template>
  <div class="product-question">
    <p class="product-question-title">CÂU HỎI THƯỜNG GẶP</p>

    <div class="product-question-item" @click="quesContent1 = !quesContent1, quesContent2=false,quesContent3=false,quesContent4=false,quesContent5=false">
      <p>
        Vì sao tôi nên tham gia thu cũ đổi mới khi mua điện thoại tại
        CellphoneS?
      </p>

      <icon-right />
    </div>
    <div class="product-question-item-content " v-show="quesContent1">
      <p>
        Khách hàng
        <strong>nên tham gia thu cũ đổi mới, lên đời điện thoại</strong> tại
        CellphoneS vì:
      </p>
      <ul>
        <li>
          Chương trình thu cũ đổi mới với giá cực kỳ hấp dẫn, được hưởng chính
          sách trợ giá lên tới 6.000.000 VNĐ. Khách hàng hoàn toàn có thể mang
          đến điện thoại cũ (theo chính sách) để lên đời điện thoại mới với giá
          ưu đãi.
        </li>
        <li>
          CellphoneS sẽ kiểm tra, đánh giá thiết bị của bạn và đưa ra mức giá
          tốt nhất. Như vậy, bạn sẽ được tận hưởng những tính năng tuyệt vời của
          thiết bị mới mà chỉ cần bỏ ra một khoản tiền nhỏ bù vào.
        </li>
      </ul>
    </div>

    <div class="product-question-item" @click="quesContent2 = !quesContent2,quesContent1=false,quesContent3=false,quesContent4=false,quesContent5=false">
      <p>
        Thủ tục trả góp điện thoại tại CellphoneS như thế nào? Có dễ dàng không?
      </p>

      <icon-right />
    </div>
    <div class="product-question-item-content" v-show="quesContent2">
      <p>
        Thủ tục mua trả góp điện thoại tại CellphoneS rất dễ dàng và nhanh
        chóng.
      </p>
      <p>
        Khách hàng có thể <strong>trả góp 0% </strong> tại CellphoneS thông qua
        <strong
          >công ty tài chính hoặc <strong>trả góp online qua thẻ</strong> Visa,
          Mastercard, JBC. Với hình thức này,</strong
        >
        bạn không cần trả trước hoặc chỉ cần bỏ ra khoản nhỏ ban đầu, số tiền
        còn lại góp trong khoảng thời gian từ 4 đến 12 tháng là đã có thể sở hữu
        được ngay sản phẩm mới trên tay.
      </p>
    </div>
    <div class="product-question-item"  @click="quesContent3 = !quesContent3, quesContent1=false,quesContent2=false,quesContent4=false,quesContent5=false ">
      <p>
        Khách hàng thành viên (Smember) được ưu đãi những gì khi mua điện thoại?
      </p>

      <icon-right />
    </div>
    <div class="product-question-item-content" v-show="quesContent3">
      <p>
        Khách hàng thành viên (Smember) sẽ nhận được
        <strong> các ưu đãi hấp dẫn </strong> khi mua điện thoại như sau:
      </p>
      <ul>
        <li>
          Tài khoản cấp độ <strong>S-New</strong>: Giảm thêm 5% (tối đa
          200.000VND) khi tham gia thu cũ lên đời, tặng voucher sinh nhật trị
          giá đến 50.000VND.
        </li>
        <li>
          Tài khoản cấp độ <strong>S-MEM</strong>: Giảm thêm 0.5% khi mua sản
          phẩm điện thoại, giảm thêm 5% (tối đa 300.000VND) khi tham gia thu cũ
          lên đời, nhận voucher sinh nhật lên đến 200.000VND.
        </li>
        <li>
          Tài khoản cấp độ S-Vip: Giảm thêm 1% khi mua điện thoại, giảm thêm 5%
          (tối đa 300.000VND) khi thu cũ lên đời, tặng voucer sinh nhật lên đến
          500.000VND.
        </li>
      </ul>
    </div>
    <div class="product-question-item" @click="quesContent4 = !quesContent4, quesContent1=false,quesContent2=false,quesContent3=false,quesContent5=false ">
      <p>
        Tôi có thể bảo hành điện thoại ở đâu và chính sách bảo hành như thế nào?
      </p>

      <icon-right />
    </div>
    <div class="product-question-item-content" v-show="quesContent4">
      <p>
        Quý khách hàng có thể bảo hành điện thoại đã mua tại
        <strong> hệ thống tất cả cửa hàng CellphoneS</strong>
        trên toàn quốc.
      </p>
      <p>
        Tuỳ vào từng sản phẩm, thời gian bảo hành sẽ có sự thay đổi khác nhau.
        Cụ thể:
      </p>
      <ul>
        <li>Thời gian bảo hành lên đến 12 tháng kể từ ngày mua hàng.</li>
        <li>Bảo hành tại các trung tâm bảo hành chính hãng.</li>
        <li>
          1 đổi 1 trong vòng 30 ngày nếu xuất hiện lỗi phần cứng từ nhà sản
          xuất.
        </li>
      </ul>
    </div>
    <div class="product-question-item"  @click="quesContent5 = !quesContent5, quesContent1=false,quesContent2=false,quesContent3=false,quesContent4=false ">
      <p>Tôi có thể thanh toán qua những hình thức nào?</p>

      <icon-right />
    </div>
    <div class="product-question-item-content" v-show="quesContent5">
      <p>
        CellphoneS cung cấp <strong>nhiều phương thức thanh toán</strong> khác
        nhau để khách hàng có thể dễ dàng lựa chọn như:
      </p>

      <ul>
        <li>Tiền mặt</li>
        <li>Quẹt thẻ</li>
        <li>Quét mã QR VNPAY</li>
        <li>
          Trả góp qua công ty tài chính: xét duyệt online và nhận sản phẩm tại
          cửa hàng
        </li>
        <li>Trả góp online qua thẻ (Visa, Mastercard, JBC)</li>
      </ul>
      <p>
        Khách hàng hoàn toàn có thể yên tâm về tính an toàn và tiện lợi của các
        phương thức thanh toán tại hệ thống cửa hàng của chúng tôi.
      </p>
    </div>
  </div>
</template>

<script>
import IconRight from "../../icon/IconRight.vue";
export default {
  components: {
    IconRight,
  },
  data() {
    return {
         quesContent1:false,
         quesContent2:false,
         quesContent3:false,
         quesContent4:false,
         quesContent5:false,
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.product-question {
  background-color: #f9fafb;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  margin: 15px auto;
  padding: 10px;
}
.product-question-title {
  color: var(--color--primary);
  font-size: 24px;
  text-align: center;
  font-weight: 700;
}
.product-question-item {
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #000;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  margin-bottom: 0;
  margin-top: 5px;
  padding: 15px;
}
.product-question-item:hover {
  background-color: var(--color-bg-hover);
}
.product-question-item p {
  color: #000;
  font-weight: 700;
}
.product-question-item-content {
  background-color: #f2f2f2;
  font-size: 14px;
  overflow: hidden;
  text-align: justify;
  padding: 10px;
}
.product-question-item-content--active {
  display: block;
  background-color: #f2f2f2;
  font-size: 14px;
  overflow: hidden;
  text-align: justify;
  padding: 10px;
}
.product-question-item-content ul {
  padding-left: 40px;
  list-style: disc;
}
.product-question-item-content p {
  margin-bottom: 10px;
}
</style>