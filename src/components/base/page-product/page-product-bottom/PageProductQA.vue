<template>
  <div class="page-product-qa">
    <div class="product-qa-title">Hỏi và đáp</div>
    <div class="product-qa-textarea-cmt">
      <textarea
        name=""
        id=""
        class="textarea"
        placeholder="Xin mời để lại câu hỏi, CellPhoneS sẽ trả lời lại trong 1h, các câu hỏi sau 22h-8h sẽ trả lời vào sáng hôm sau"
      ></textarea>
      <div class="qa-textarea-cmt-btn">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          style="enable-background: new 0 0 97.103 97.104"
          fill="#ffff"
          stroke="#fff"
          xml:space="preserve"
        >
          <g>
            <path
              d="M15.459 0.061A0.358 0.358 0 0 0 15.077 0.05L0.558 8.665a0.358 0.358 0 0 0 0.087 0.652l3.689 1.027c0.112 0.031 0.232 0.006 0.322 -0.068l5.894 -4.815 -4.111 5.248a0.356 0.356 0 0 0 -0.076 0.221v4.713a0.357 0.357 0 0 0 0.358 0.358c0.12 0 0.235 -0.06 0.302 -0.165L9.588 11.806l3.752 1.044a0.359 0.359 0 0 0 0.45 -0.292l1.822 -12.148A0.358 0.358 0 0 0 15.459 0.061z"
            />
          </g>
        </svg>
        <p>Gửi</p>
      </div>
    </div>

    <hr />
    <div class="product-list-qa-cmt">
      <div class="product-qa-cmt-item">
        <div class="product-qa-cmt-info">
          <div class="qa-cmt-info-name">
            <p>N</p>
            <div class="qa-cmt-info-name-fullname">Nguyễn Mai Trung</div>
          </div>
          <div class="qa-cmt-info-time">
            <icon-clock />
            <p>11 tiếng trước</p>
          </div>
        </div>
        <div class="product-qa-cmt-content">
          <p>
            E muốn xin danh sách những máy xiaomi còn hàng ở chi nhánh Việt Trì
            tầm giá 4tr trở xuống ạ(máy cũ cũng ok)
          </p>
          <div class="qa-cmt-content-rep">
            <icon-rep />
            <p>Trả lời</p>
          </div>
        </div>
        <div class="product-qa-cmt-rep">
          <div class="product-qa-cmt-info">
            <div class="qa-cmt-info-name">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
              >
                <rect width="40" height="40" fill="url(#pattern111)"></rect>
                <defs>
                  <pattern
                    id="pattern111"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_119_16"
                      transform="scale(0.00333333)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_119_16"
                    width="300"
                    height="300"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
              <div class="qa-cmt-info-name-fullname">Quản trị viên</div>
              <div class="qa-cmt-info-name-admin">QTV</div>
            </div>
            <div class="qa-cmt-info-time">
              <icon-clock />
              <p>11 tiếng trước</p>
            </div>
          </div>
          <div class="product-qa-cmt-content">
            <p>
              CellphoneS xin chào Anh Nguyễn Mai Trung ạ! <br />
              Dạ vâng ạ . Em báo shop gửi shop thông tin hỗ trợ mình chi tiết
              hơn qua số điện thoại *****564 này nhé . Bên em liên hệ mình trong
              vòng 30/60P nhé ạ <br />
              Thân mến
            </p>
            <div class="qa-cmt-content-rep">
              <icon-rep />
              <p>Trả lời</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-qa-cmt-item">
        <div class="product-qa-cmt-info">
          <div class="qa-cmt-info-name">
            <p>N</p>
            <div class="qa-cmt-info-name-fullname">Nguyễn Mai Trung</div>
          </div>
          <div class="qa-cmt-info-time">
            <icon-clock />
            <p>11 tiếng trước</p>
          </div>
        </div>
        <div class="product-qa-cmt-content">
          <p>
            E muốn xin danh sách những máy xiaomi còn hàng ở chi nhánh Việt Trì
            tầm giá 4tr trở xuống ạ(máy cũ cũng ok)
          </p>
          <div class="qa-cmt-content-rep">
            <icon-rep />
            <p>Trả lời</p>
          </div>
        </div>
        <div class="product-qa-cmt-rep">
          <div class="product-qa-cmt-info">
            <div class="qa-cmt-info-name">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
              >
                <rect width="40" height="40" fill="url(#pattern111)"></rect>
                <defs>
                  <pattern
                    id="pattern111"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_119_16"
                      transform="scale(0.00333333)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_119_16"
                    width="300"
                    height="300"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
              <div class="qa-cmt-info-name-fullname">Quản trị viên</div>
              <div class="qa-cmt-info-name-admin">QTV</div>
            </div>
            <div class="qa-cmt-info-time">
              <icon-clock />
              <p>11 tiếng trước</p>
            </div>
          </div>
          <div class="product-qa-cmt-content">
            <p>
              CellphoneS xin chào Anh Nguyễn Mai Trung ạ! <br />
              Dạ vâng ạ . Em báo shop gửi shop thông tin hỗ trợ mình chi tiết
              hơn qua số điện thoại *****564 này nhé . Bên em liên hệ mình trong
              vòng 30/60P nhé ạ <br />
              Thân mến
            </p>
            <div class="qa-cmt-content-rep">
              <icon-rep />
              <p>Trả lời</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-qa-cmt-item">
        <div class="product-qa-cmt-info">
          <div class="qa-cmt-info-name">
            <p>N</p>
            <div class="qa-cmt-info-name-fullname">Hoàn Nguyễn</div>
          </div>
          <div class="qa-cmt-info-time">
            <icon-clock />
            <p>4 ngày trước</p>
          </div>
        </div>
        <div class="product-qa-cmt-content">
          <p>Có đt nào dưới 3tr dung lượng cao mà pin trâu tí không ạ?</p>
          <div class="qa-cmt-content-rep">
            <icon-rep />
            <p>Trả lời</p>
          </div>
        </div>
        <div class="product-qa-cmt-rep">
          <div class="product-qa-cmt-info">
            <div class="qa-cmt-info-name">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
              >
                <rect width="40" height="40" fill="url(#pattern111)"></rect>
                <defs>
                  <pattern
                    id="pattern111"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_119_16"
                      transform="scale(0.00333333)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_119_16"
                    width="300"
                    height="300"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
              <div class="qa-cmt-info-name-fullname">Quản trị viên</div>
              <div class="qa-cmt-info-name-admin">QTV</div>
            </div>
            <div class="qa-cmt-info-time">
              <icon-clock />
              <p>4 ngày trước</p>
            </div>
          </div>
          <div class="product-qa-cmt-content">
            <p>
              CellphoneS xin chào anh Hoàn Nguyễn
              <br />
              Dạ trong tầm giá này mình có thể tham khảo mẫu này ạ
              https://cellphones.com.vn/infinix-hot-30i.html
              <br />
              Anh muốn đến cửa hàng hay giao về em hỗ trợ lên đơn giữ máy cho
              mình ạ Thân Mến!
            </p>
            <div class="qa-cmt-content-rep">
              <icon-rep />
              <p>Trả lời</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-qa-cmt-item">
        <div class="product-qa-cmt-info">
          <div class="qa-cmt-info-name">
            <p>N</p>
            <div class="qa-cmt-info-name-fullname">Nguyễn Mai Trung</div>
          </div>
          <div class="qa-cmt-info-time">
            <icon-clock />
            <p>11 tiếng trước</p>
          </div>
        </div>
        <div class="product-qa-cmt-content">
          <p>
            E muốn xin danh sách những máy xiaomi còn hàng ở chi nhánh Việt Trì
            tầm giá 4tr trở xuống ạ(máy cũ cũng ok)
          </p>
          <div class="qa-cmt-content-rep">
            <icon-rep />
            <p>Trả lời</p>
          </div>
        </div>
        <div class="product-qa-cmt-rep">
          <div class="product-qa-cmt-info">
            <div class="qa-cmt-info-name">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
              >
                <rect width="40" height="40" fill="url(#pattern111)"></rect>
                <defs>
                  <pattern
                    id="pattern111"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_119_16"
                      transform="scale(0.00333333)"
                    ></use>
                  </pattern>
                  <image
                    id="image0_119_16"
                    width="300"
                    height="300"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC5BJREFUeNrs3VFoVecBwHG1aU1tYs1Sa1WGW6GrT3MvoRSKgtPKXowPdnuZYYHsRdDCFCyoe4lCw/ShCctLM4SbPbUOoi9jWgRlY+B9qk+1e1hDiV1msyTmaq9p1H3J3UKRRONJrt855/5+SJHWG2/Oyb/nnO/7zrnL//Ob9yevfbYMiKQuFFi+XLQhIJYVNgGIEEQIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIiBBECIgQRAhUT12a39y6T87YQyyJ4R3tIkyifmuLnx6cjgIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIiBBECIgQRAiIEEQIihFSqswkeUr5SHN7RbjukREPbnua+E46EEE2pMFAqnBMhxDTScXTy089ECDEN72y/PzYhQogmFJjjDkVINoQz0tHDXSKEmEqFgVs9/SKEmEYPdZWvFEUIMd3ce3Bq8IYIIZr7YxOhwzwN0oiQ7MnZII0IyaRSYWC8s1eEENNYZ++d85dECDHlY0WbCMmw+2MTIx3Hsj5II0KyLRwJw/FQhBBTuDLM9CCNCMmDTA/SiJCcyO4gjQjJiZmVNO9mcZBGhOTH1ODQzXcOihBiKl8ujh7qEiHEdKunP1vPhhIhOTR6+P0MDdKIkBzK1iCNCMmnqcGh4Z3tIsyk5368+bktm22HHJhZ0XZMhNmzYk3juotndJgPmXiAtwh1mHPpX0kjwnk7bO47Ef5pU+RAyi8ORTj/xeGWzeF4qMMcSPkwqQh1iAhT32HTqfdsB0QYU0Nba3PfSdsBEeoQEdZ8h6sP7LMdEGFMTaePNLTtsR0QYUzNfSd0iAjjd1i/rcV2QIQxrf2426I2RBh1q1lcighT0mHdpo02BSKM2eHasx9Y1IYIY7K4FBGmpUPbARFG7tCiNkQYmcWliFCHiJCZDi1qI1cRjh7qmhq8ka0NanEpuYrwVk//0Gtv39x7MFuf/6hD8nY6GgoMHQ69tis0mZUHm4cOLWojb9eEU4ND4ez0y5ffHOk4lonP+rC4lLxFOKtUGPiqZW/4VSqcS/OB0SJvchthxczHDBwd+tHbaR68mVlc2m1RG/mMsCIcCSuDN8M729M5eFO3aYPFpeQ5wlnly8XK4M14Z2/azlEt8qYmIqyYGhwa6+ytDN6UrxRT1WE4L/XTRv4jnFUqDAzvaE/V4E391haL2qihCCtmB2/CgTENgzcWl1JzEVaEI2E4MFYGb6J/XmTosOn0ET92fNczh1/9SebWZya9YrzxzflLtwvnHoxP1P1gY6yRkpVvbLk3eCMT6w0QYXUOjOMT5SvFiZ7+UELoMMqTmlbt3q5Dauh0dD6VwZuh13ZFGbyxyBsRzp6jDsUavGk6dcSiNkT4/3PUGIM3FpciwjmULxfDgfHLl98c7+x9CgdGHSLCeQ+MY529lfuJq73yJnQYrg8tahMhc7tz/lJl8Kaq9xMvfnGpMR4R5lzlfuLK4E2V5hUW3+HGf1yQYkbV3DxhYg/Kk6HA0ocf3Z0+QV2+5Bdyz7zy0rOvv3rnoz8neG14Y8uXLfve738bOnxmTePktc/Cu7XLRJjjA+P0ypuJnv5l5cmlXXnz7Os/rNu08ZtEN0bevXotvLZ+W0v41fjrX6yoXylFEeb/wFhZefNtOArVrwz9LNV5aeIOw6vCy8M7Ce+nkmI4uk5d/+L++IT9JcI8+/b6P8M55O3CuWXLw6Hs1RDA4jsM55bJRmXLF/76/NtvhfbC78M7WfnGltUH94Wqv/30uhRTa/m/dvyqfLloQyyVcFXWeOCXi79iHOk4VioMJHhhOD1eX/xT3aYND/37UuHc7f4B+1qEtSJE2HhgX0Nba5QOHzHWGg6w45299rgIa0XIoGHfnsbpE8INyb7C8M72ZHsndLi+eHbes9ZwNdvdn63nmrsmJIkH5cm7V68tZvBm1e6fli/87d7w10/6wvCSe4M3Vu3ePud/DVeJL/z8Z+HM+cH4hDuqRFgTZgdvwg/99LjLggdvwp8MtSTrMNT1YGzi+V1vPeJAHSqtpDg1OGQ+w+loDQk/9y+0tdZvbVngn78/NvFVy97QSYK/q7nv5EIuTcNfEY7YGfq0DxGyBCqDN+FYtJDp/nBYC9eHyQpZ98mZBQYvRRHWooUP3iTuMMENU6XCuZmbuYbsIBHWkOk1LjMHxip1uPHzC0+6wk6KT+l/xDZBSizkSf7haNZ06r0EXzx8wQT1hovJjf/4y/TZ7LYWO6h6jI6mS+VhcLd+94f5HgaXeHHpveGvJ69eS3C7U/jrwqtCh+Et+VERYQ0JZ563C+fCrxVrVocMvjurkbjDsKMfMXm4kBSnX3t30tSiCGvrwBhiK3340dT1L0J7sxd14fcPxibuXr2WoO3lM9efCX9cXnlpdmpRiiKsIZX7iSd6+r97P/Hzu95K9gThcLobDmuLWWI+O8vvBmIR1pyHnuTf0NaarMPwRcLBcJFPHw8puoF4SZiiyLDKypvRQ10JOlzapy1OP7i1f2Ci+4/mM0TIEwhHwvXFs0v7tEVTi0nOKWyCGj65HUq8FG7+g/P01GJz30lTiyJkQSqfo1qF8+TWcK5rll+ELMid85dGOo5V4yvXb22ppJhsZlKE1JBSYeBWT3+VvnhIce3Zbs8mFiGPMXqoq6ofR1W3aUNz34lKij54Q4TMLVwcVnsRzP9S/PzCmuP7pShC5jC8s/0pLEYL+b14fL8URcgc7o9N3Nz77tO5rb6S4vf//ffmvpOLXLsjQnKlGpOHjzY7tVizKYqQh1Vp8nAhKdbm1KIImUP1Jg8fbXZqsaZSFCFzKxUGqjpp8dgU1xfP1sjUogiZVzgpjdXhspkbl2enFkVI7Ro9/H7cO+hnZ/lzPJ8hQh6l8pi26E+yCCnmeGpRhDy+w5GOY2l4JvfsLH/T6SN5ms8QIY+3mIfwVyPF1Qf25WlqUYQstMPRw12peku5uYFYhCxUqTAQZfLwsSlmfWpRhDxZhxEnLR4h0zcQi5AnM9JxNLWfs53RG4hFSJIO0/z47czdQCxCnlhl8jDlz4zO0A3EIiRhhzf3Hkz/B/rOTi2KkByqTB5m46LLkZAcd5jCSYvMESGLUioMjB7qsh1ESEy3evrTOXkoQmpImicPRUgNdeize0VITJmYPBQh+e8wE5OHIiTPwhnpzXcO2g4iJKby5aLJQxESWakwMN7ZazuIkJjGOntNHoqQyEY6jpavFG0HERLTzb0HTR6KkJgqk4cmLUSIDkVIbTN5KELiM3koQuIrFQZu9fTbDiIkptFDXQZLRUhk98eN0IgQRAiIEEQIiBBECIgQRAiIEEQ4v+e2bLaHEGFM6y6eycQnrUJuIwwF6hARxj8jbTr1nv2ECGNqaGtdc3y/XYUIY3rx+P5Vu7fbW4gwpua+kwZLEWHUN7qmce3ZboM0iDCmuk0b1l08Y58hwpjCGWk4L7XbEGFMDW2tqw/ss+cQYUxNp4/Ub2ux8xBhTGs/7jZYigijvu81jc19JwyWIsKYwpFw7dluuxARxlS/tcVgKSKMrKGttaFtjx2JCGMKF4cGaRBhZOsunqnbtNHuRITxvo3plaUfGCxFhDFZ0YYI41u1e3vT6SN2KiKMafWBfQZLEWFkTaeOGCxFhFG/Jc9oQ4Q6hFqPcJlnJSLCNPCsREQYn2clIsL4PCsREcb+Dj0rERFG51mJiDA+K0tJ70Gidr7Vmdt/W+1yHAkBEYIIARGCCAERgggBEYIIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhIAIQYSACEGEgAhBhMBSqEvzmytfKdpDiDCm4R3t9hBORwERgggBEYIIARGCCAERgggBEYIIARGCCAERgggBEYIIARGCCAERQmb9V4ABAFXgaxUf70DBAAAAAElFTkSuQmCC"
                  ></image>
                </defs>
              </svg>
              <div class="qa-cmt-info-name-fullname">Quản trị viên</div>
              <div class="qa-cmt-info-name-admin">QTV</div>
            </div>
            <div class="qa-cmt-info-time">
              <icon-clock />
              <p>11 tiếng trước</p>
            </div>
          </div>
          <div class="product-qa-cmt-content">
            <p>
                CellphoneS xin chào anh Hoàn Nguyễn
              <br />
              Dạ trong tầm giá này mình có thể tham khảo mẫu này ạ
              https://cellphones.com.vn/infinix-hot-30i.html
              <br />
              Anh muốn đến cửa hàng hay giao về em hỗ trợ lên đơn giữ máy cho
              mình ạ Thân Mến!
            </p>
            <div class="qa-cmt-content-rep">
              <icon-rep />
              <p>Trả lời</p>
            </div>
          </div>
        </div>
      </div>
    
      
    </div>
    <div class="product-qa-cmt-add-btn">
        <div class="qa-cmt-add-btn-container">
            <p>Xem thêm 1140 bình luận </p>
           <icon-down></icon-down>
        </div>
       
    </div>
  </div>
</template>

<script>
import IconClock from "../../icon/IconClock.vue";
import IconDown from '../../icon/IconDown.vue';
import IconRep from "../../icon/IconRep.vue";
export default {
  components: {
    IconClock,
    IconRep,
    IconDown 
  },

};
</script>

<style scoped>
.page-product-qa {
  width: 100%;
  background-color: #f9fafb;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  margin-top: 15px;
  padding: 10px;
}

.product-qa-title {
  color: #363636;
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: 700;
}
.product-qa-textarea-cmt {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-top: 10px;
  width: 100%;
}
.product-qa-textarea-cmt .textarea {
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  min-width: 0 !important;
  width: calc(100% - 90px);
  outline: none;
  max-height: 40em;
  min-height: 8em;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  vertical-align: top;
  padding: 10px;
}
.product-qa-textarea-cmt .textarea::placeholder {
  font-family: sans-serif;
  font-size: 13px;
}
.qa-textarea-cmt-btn {
  display: flex;
  background: var(--color--primary);
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.qa-textarea-cmt-btn:hover {
  background-color: rgba(215, 0, 14, 0.82);
  color: #fff;
}
.qa-textarea-cmt-btn p {
  font-size: 16px;
  margin-left: 4px;
}
.product-qa-cmt-item {
  margin-bottom: 15px;
}
.product-qa-cmt-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 15px;
}
.qa-cmt-info-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
}
.qa-cmt-info-name p {
  align-items: center;
  background-color: #ddd;
  border-radius: 5px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 25px;
  justify-content: center;
  text-transform: capitalize;
  width: 25px;
  color: #0c1e7f;
}
.qa-cmt-info-name-fullname {
  font-size: 14px;
  font-weight: 700;
  line-height: 2;
  margin-left: 6px;
  text-transform: capitalize;
}
.qa-cmt-info-name-admin {
  background: var(--color--primary);
  color: #ffff;
  font-weight: 700;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  margin-left: 5px;
}
.qa-cmt-info-time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.qa-cmt-info-time p {
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;
  color: #707070;
}
.product-qa-cmt-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  margin-left: auto;
  overflow: hidden;
  padding: 10px;
  width: calc(100% - 25px);
  font-size: 13px;
}
.product-qa-cmt-rep {
  margin-left: 25px;
  margin-top: 15px;
}
.product-qa-cmt-content .qa-cmt-content-rep {
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color--primary);
  font-size: 14px;
  cursor: pointer;
}
.product-qa-cmt-item:nth-child(1) .qa-cmt-info-name p {
  color: #000;
}
.product-qa-cmt-item:nth-child(2) .qa-cmt-info-name p {
  color: #0c1e7f;
}
.product-qa-cmt-item:nth-child(3) .qa-cmt-info-name p {
  color: #745b70;
}
.product-qa-cmt-item:nth-child(4) .qa-cmt-info-name p {
  color: #0b7751;
}
.product-qa-cmt-add-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;


}
.qa-cmt-add-btn-container{
    background: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15);
    color: #212529;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 34px;
    margin: auto;
    max-width: 335px;
    -webkit-text-decoration: none;
    text-decoration: none;
    transition: .3s;
    width: 100%;
    align-items: center;
    justify-content: center;
    
}
.qa-cmt-add-btn-container p{
    margin-right: 4px;
}
.qa-cmt-add-btn-container:hover{
    background-color: #fef2f2;
    border: none;
    color: #d70018;
    transition: background-color .5s ease-out;
}   
</style>