<template>
  <div class="product-block-content" :class="{'product-content-active':isActive}">
    <div class="product-block-content-header">
      <router-link to="" class="product-block-content-link"
        >iPhone 14</router-link
      >
      <router-link to="" class="product-block-content-link"
        >iPhone 11</router-link
      >
      <router-link to="" class="product-block-content-link"
        >Samsung S23 Ultra</router-link
      >
      <router-link to="" class="product-block-content-link"
        >Xiaomi 13</router-link
      >
    </div>
    <div class="product-block-content-body">
      <blockquote>
        <p>
          <router-link class="" to="/mobile"> Điện thoại </router-link>
          là thiết bị quan trọng, hữu dụng với
          <b> nhiều chức năng</b>
          thiết thực phục vụ cho cuộc sống như

          <b>liên lạc, tra cứu thông tin, chụp ảnh - quay phim, giải trí</b>
          ,... Điện thoại hay smartphone có thiết kế nhỏ gọn, trở thành vật mang
          theo bên mình không thể thiếu của mỗi người. Hiện nay, chiếc điện
          thoại ngày càng được cải tiến về

          <b>tính năng, cấu hình, thiết kế </b>
          để phục vụ tốt hơn cho con người.
        </p>
      </blockquote>
      <h2>Điện thoại di động – Vật “bất li thân” ở thời đại công nghệ</h2>
      <p>
        <b>Điện thoại di động</b>
        dường như là
        <b>một phần không thể thiếu trong cuộc sống </b>

        hiện đại ngày nay. Với sự đa dạng về thiết kế, thương hiệu cùng với đó
        là tính năng đa dạng giúp người dùng thoải mái kết nối cũng như theo
        dõi, cập nhật các thông tin mới mẻ hấp dẫn. Chắc chắn rằng khi sở hữu
        bạn sẽ có những giây phút giải trí ấn tượng và thú vị hơn mọi ngày. Hơn
        nữa, điện thoại di động cũng trở thành công cụ quan trọng giúp hỗ trợ
        đắc lực người dùng trong cuộc sống lẫn công việc.
      </p>
      <img
        src="https://cdn2.cellphones.com.vn/x,webp,q100/media/wysiwyg/Phone/Dien-thoai-1.jpg"
        alt=""
      />
      <strong>Các chức năng chính của điện thoại di động:</strong>
      <p>
        <strong>- Giao tiếp và kết nối: </strong>
        Điện thoại thông minh còn giúp người dùng có thể dễ dàng truy cập vào
        internet và tìm kiếm thông tin chỉ bằng một vài lần chạm. Điều này giúp
        bạn dễ dàng nắm bắt cập nhật về tin tức, kiến thức và xu hướng trong
        thời gian thực.
      </p>
      <p>
        <strong>- Truy cập thông tin: </strong>
        Điện thoại di động cho phép người dùng liên lạc và kết nối với nhau mọi
        lúc, mọi nơi thông qua các hình thức như: gọi, nhắn tin, gửi email, thậm
        chí video call với người thân, bạn bè, đồng nghiệp và đối tác kinh doanh
        ở bất kỳ đâu trên thế giới. Từ đó giúp thu gọn khoảng cách và tạo ra sự
        gắn kết trong xã hội hiện đại.
      </p>
      <p>
        <strong>- Giải trí:</strong>
        Điện thoại di động giờ đây còn là một công cụ giải trí đa năng. Bạn có
        thể nghe nhạc, xem phim, đọc sách điện tử, chơi game và truy cập vào các
        ứng dụng giải trí khác trực tiếp trên thiết bị. Đây là cách vô cùng
        thuận tiện giúp mọi người có thể thư giãn và giải trí tiện ích hơn trong
        cuộc sống bận rộn.
      </p>
      <p>
        <strong>- Quản lý cuộc sống: </strong>
        Trên điện thoại di động có chứa các ứng dụng giúp người dùng có thể dễ
        dàng quản lý cuộc sống hàng ngày. Chúng có thể là ứng dụng lên kế hoạch,
        tổ chức công việc hay nhắc nhở sự kiện, thông tin quan trọng. Bên cạnh
        đó còn vô vàn ứng dụng khác cực kỳ hữu ích với người dùng.
      </p>
      <p>
        Ngày nay, thị trường di động luôn chứng kiến sự cạnh tranh vô cùng khốc
        liệt giữa các nhà sản xuất. Họ sẵn sàng đầu tư nghiên cứu để liên tục
        cho ra đời những chiếc điện thoại mới nhất chất lượng, từ giá rẻ, tầm
        trung, cận cao cấp cho đến cao cấp để đáp ứng tối đa nhu cầu của mọi đối
        tượng người dùng.
      </p>
    </div>
    <div class="block-content-btn-add" v-show="isShowBtn">
      <div class="btn-add-container" @click="showBlockContent" >
        <span>Xem thêm</span>
        <icon-down></icon-down>
      </div>
    </div>
  </div>
</template>

<script>
import IconDown from "../../icon/IconDown.vue";
export default {
  components:{
    IconDown
  },
  data(){
    return{
      isShowBtn:true,
      isActive:false
    }
  },  
  methods:{
    showBlockContent(){
      this.isShowBtn=false;
      this.isActive=true;
    }
  }
};
</script>

<style scoped>
.product-block-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  display: block;
  margin-bottom: 15px;
  margin-right: auto;
  max-height:500px;
  min-height:0;
  padding: 15px;
  overflow: hidden;
  position: relative;
  text-align: justify;
  width: 100%;
}
.product-content-active{
  max-height: 1170px;
}
.product-block-content-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.product-block-content-link {
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  margin-bottom: 0;
  padding: 6px 12px;
  text-align: center;
  margin-right: 4px;
}

.product-block-content-body.product-block-content-body p {
  margin-bottom: 10px;
}
.product-block-content-body blockquote{
  border-left: 6px solid #f0f0f0f0;
  padding-left: 10px;

}
.product-block-content-body p a {
  color: var(--color--primary);
  font-size: 15px;
  font-weight: 600;
}
.product-block-content-body p b {
  color: #000;
  font-size: 15px;
  font-weight: 600;
}
.product-block-content-body h2 {
  color: #000000;
  font-size: 21px;

  font-weight: 700;
}
.product-block-content img{
  width: 100%;
  height: auto;
}
.block-content-btn-add {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.91) 50%,
    #fff 55%
  );
  border-radius: 10px;
  bottom: 0;
  display: block;
  left: 0;
  margin-bottom: 0;
  padding-top: 50px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
}

.block-content-btn-add .btn-add-container {
  align-items: center;
  background: #fff;
  border: none;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  color: #212529;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 34px;
  justify-content: center;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 335px;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 100%;
}
.block-content-btn-add .btn-add-container span {
  margin-right: 4px;
}
.block-content-btn-add .btn-add-container:hover {
  background: #fef2f2;
  border: 1px solid var(--color--primary);
  color: var(--color--primary);
}
</style>