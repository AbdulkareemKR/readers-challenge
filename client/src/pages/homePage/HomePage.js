import React from "react";
import styles from "./home.module.css";
import maamourFront from "../../Component/images/maamour-front.jpg";
import maamourGarden from "../../Component/images/maamour-garden.jpg";
import maamourIncubation from "../../Component/images/maamour-incubation.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";

function MainPage() {
  return (
    <div className={styles.container}>
      <Fade
        durtion={3000}
        cascade // fade in element by element (i * damping * delay)
        damping={0.3}
        triggerOnce // to present each element on itself while moving down
        direction="up"
        fraction={0.1}
      >
        {/* <img
          src={maamourFront}
          alt="واجهة معمور"
          className={styles.maamourFront}
        /> */}
        <p>
          القراءة هي عملية عقلية، وتعني إدراك القارئ للنص المكتوب وفهمه واستيعاب محتوياته، وهي عملية تفاعلية بين القارئ والكاتب، وتعتبر نشاطاً للحصول على المعلومات، حيث يتم قراءة هذه المعلومات إما بصمت أو بصوتٍ عالٍ، ويجب على الشخص القارئ أن يكون قادراً على نطق وفهم الكلمات، والحروف، والإشارات، والرموز الموجودة في النص، وتحتاج القراءة إلى وجود مهارات داعمة مثل، مهارة الكتابة، والتحدث، والاستماع.
              </p>
                      <p>لجعل القراءة عملية ناجحة، يجب إعداد قائمة بالمفردات الجديدة التي تمر على القارئ أثناء قراءته، والبحث عن معاني هذه الكلمات لفهم محتوى النص بشكل أفضل.

        </p>
        <p>
          تحتاج القراءة إلى التركيز والراحة، لذا يجب اختيار مكان هادئ ومريح بعيداً عن الإزعاج، حيث يمكن إنشاء مكان مخصص للقيام بها، والذي يعمل كذلك على تحسين المزاج للقراءة.
        </p>

        {/* <Row>
          <Col>
            <img
              src={maamourGarden}
              alt="واجهة معمور"
              className={styles.maamourFront}
            ></img>
          </Col>
          <Col>
            <img
              src={maamourIncubation}
              alt="واجهة معمور"
              className={styles.maamourFront}
            ></img>
          </Col>
        </Row> */}
        <p>
          على سطح المسجد يوجد ممشى وملعب رياضي لكرة الطائرة، كما توجد فيه صيدلية
          يعود ريعها على أعمال خيرية وتبيع الأدوية بأسعار مخفضة، بالإضافة إلى
          صراف آلي وتموينات غذائية.
        </p>
        <p>
          ويوفر المسجد مواقف وممرات لذوي الاحتياجات الخاصة، كما يوفر "كود الوصول
          الشامل" الذي يتيح مثلا للكفيف دخول المسجد من غير مساعدة.
        </p>
        <p>
          كذلك يرتفع المسجد عشرين سنتيمترا فقط عن الأرض، أي أنه من دون سلالم
          للصعود، وذلك لمساعدة كبار السن وذوي الاحتياجات الخاصة.
        </p>
      </Fade>
    </div>
  );
}

export default MainPage;
