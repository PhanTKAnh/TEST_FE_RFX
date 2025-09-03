import phoneIcon from "../../../../assets/imgs/phone.png"; 
import emailIcon from "../../../../assets/imgs/envelope.png";
import githubIcon from "../../../../assets/imgs/icon-pos.png";
import locationIcon from "../../../../assets/imgs/location-dot.png";

import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import Inter from "../../Font/Inter-Italic-VariableFont_opsz,wght.ttf";

Font.register({
  family: "Inter",
  fonts: [
    { src: Inter, fontWeight: "normal" },
  ]
});
// Styles
const styles = StyleSheet.create({
  page: { flexDirection: "row", padding: 30, fontSize: 10,fontFamily:  "Inter"},
  leftColumn: { width: "35%", paddingRight: 20, borderRight: "1pt solid #ccc" },
  rightColumn: { width: "65%", paddingLeft: 20 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  subHeading: { fontSize: 12, fontWeight: "bold", marginBottom: 4, marginTop: 10 },
  text: { fontSize: 10, marginBottom: 4,maxWidth: "85%" },
  photo: { width: 120, height: 120, borderRadius: 58, marginBottom: 12 },
  placeholderPhoto: {
    width: 120,
    height: 120,
    borderRadius: 58,
    backgroundColor: "#cccccc",
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: { fontSize: 8, color: "#666666" },
});
const stripHtml = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};


const PDFCV = () => {
  const data = useSelector((state) => state.form.data);

  return (
    <PDFViewer width="100%" height={600}>
      <Document>
        <Page style={styles.page} size="A4">
          {/* Left column */}
          <View style={styles.leftColumn}>
            {/* Ảnh đại diện (tạm disable vì cần base64 để load trong PDF) */}
    

            <Text style={styles.heading}>{data.FullName || "Your Name"}</Text>
            <Text style={styles.text}>{data.Application || "Fresher Frontend Developer"}</Text>

            <Text style={styles.subHeading}>Contact</Text>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Image src={phoneIcon} style={{ width: 10, height: 10, marginRight: 4 }} />
              <Text style={styles.text}>{data.Phone || "077459547"}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Image src={emailIcon} style={{ width: 10, height: 10, marginRight: 4 }} />
              <Text style={styles.text}>{data.Email || "example@gmail.com"}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Image src={githubIcon} style={{ width: 10, height: 10, marginRight: 4 }} />
              <Text style={styles.text}>
                {data.LinkGitHub || "github.com/yourname"}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
              <Image src={locationIcon} style={{ width: 10, height: 10, marginRight: 4 }} />
              <Text style={styles.text}>{data.Address || "Da Nang, Vietnam"}</Text>
            </View>

            <Text style={styles.subHeading}>Education</Text>
            <Text style={styles.text}>
              { data.Education? stripHtml(data.Education) : "Bachelor of IT, University of Danang, GPA 3.32/4.0"}
            </Text>

            <Text style={styles.subHeading}>Skills</Text>
            <Text style={styles.text}>
            {data.Skill ? stripHtml(data.Skill) : "HTML, CSS, JavaScript, React, Redux"}
            </Text>
          </View>

          {/* Right column */}
          <View style={styles.rightColumn}>
            <Text style={styles.heading}>About Me</Text>
            <Text style={styles.text}>
              {data.Background ? stripHtml(data.Background) :
                "A motivated fresher eager to learn and contribute in frontend development."}
            </Text>

            <Text style={styles.heading}>Projects</Text>
            <Text style={styles.text}>
              {data.Projects? stripHtml(data.Projects): "Personal Quiz Website built with React.js and Redux"}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFCV;
