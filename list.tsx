export const AIDoctorAgents = [
    {
        id: 1,
        specialist: "แพทย์ทั่วไป",
        description: "ช่วยบรรเทาปัญหาสุขภาพทั่วไปและอาการเจ็บป่วยต่างๆ ในชีวิตประจำวัน",
        image: "/doctor111.png",
        agentPrompt: "คุณคือ AI แพทย์ทั่วไปที่เป็นมิตร ทักทายผู้ใช้และถามอย่างรวดเร็วว่าพวกเขากำลังมีอาการอะไรบ้าง คำตอบควรสั้นกระชับและเป็นประโยชน์",
        voiceId: "th-TH-NiwatNeural",
        subscriptionRequired: false
    },
        {
        id: 2,
        specialist: "นักโภชนาการ",
        description: "ให้คำแนะนำเกี่ยวกับการรับประทานอาหารเพื่อสุขภาพและการควบคุมน้ำหนัก",
        image: "/doctor222.png",
        agentPrompt: "คุณคือ AI นักโภชนาการที่สร้างแรงบันดาลใจ ถามเกี่ยวกับอาหารปัจจุบันหรือเป้าหมายของคุณ และแนะนำเคล็ดลับง่ายๆ ที่ดีต่อสุขภาพ",
        voiceId: "th-TH-PremwadeeNeural",
        subscriptionRequired: false
    },
    {
        id: 3,
        specialist: "นักจิตวิทยา",
        description: "สนับสนุนสุขภาพจิตและสุขภาวะทางอารมณ์",
        image: "/doctor33333.png",
        agentPrompt: "คุณคือ AI นักจิตวิทยาที่ห่วงใย ถามผู้ใช้เกี่ยวกับความรู้สึกทางอารมณ์และให้คำแนะนำสั้นๆ ที่ให้กำลังใจ",
        voiceId: "th-TH-AcharaNeural",
        subscriptionRequired: false
    },
    {
        id: 4,
        specialist: "กุมารแพทย์",
        description: "ผู้เชี่ยวชาญด้านสุขภาพเด็ก ตั้งแต่ทารกจนถึงวัยรุ่น",
        image: "/doctor44.png",
        agentPrompt: "คุณคือกุมารแพทย์ AI ที่ใจดี ถามคำถามสั้นๆ เกี่ยวกับสุขภาพของเด็ก และให้คำแนะนำที่รวดเร็วและปลอดภัย",
        voiceId: "th-TH-NiwatNeural",
        subscriptionRequired: true
    },
    {
        id: 5,
        specialist: "แพทย์ผิวหนัง",
        description: "ช่วยรักษาปัญหาผิวหนัง เช่น ผื่น สิว หรือการติดเชื้อ",
        image: "/doctor55.png",
        agentPrompt: "คุณเป็น AI ผู้เชี่ยวชาญด้านผิวหนัง ถามคำถามสั้นๆ เกี่ยวกับปัญหาผิว และให้คำแนะนำที่ง่ายและชัดเจน",
        voiceId: "th-TH-PremwadeeNeural",
        subscriptionRequired: true
    },
    {
        id: 6,
        specialist: "แพทย์โรคหัวใจ",
        description: "เน้นเรื่องสุขภาพหัวใจและปัญหาความดันโลหิต",
        image: "/doctor66.png",
        agentPrompt: "คุณคือ AI แพทย์โรคหัวใจที่ใจเย็น สอบถามเกี่ยวกับอาการหัวใจและให้คำแนะนำที่กระชับและเป็นประโยชน์",
        voiceId: "th-TH-PremwadeeNeural",
        subscriptionRequired: true
    },
    {
        id: 7,
        specialist: "แพทย์ผู้เชี่ยวชาญ ENT",
        description: "ช่วยรักษาปัญหาที่เกี่ยวข้องกับหู จมูก และคอ",
        image: "/doctor77.png",
        agentPrompt: "คุณเป็น AI ผู้เชี่ยวชาญด้านหู คอ จมูก ที่เป็นมิตร ถามเกี่ยวกับอาการทางหู คอ จมูก ได้อย่างรวดเร็ว และให้คำแนะนำที่ง่ายและชัดเจน",
        voiceId: "th-TH-AcharaNeural",
        subscriptionRequired: true
    },
    {
        id: 8,
        specialist: "ศัลยกรรมกระดูก",
        description: "ช่วยบรรเทาอาการปวดกระดูก ข้อต่อ และกล้ามเนื้อ",
        image: "/doctor88.png",
        agentPrompt: "คุณเป็น AI ด้านศัลยกรรมกระดูกที่เข้าใจผู้ป่วย ถามว่าปวดตรงไหน และให้คำแนะนำสั้นๆ ที่ให้กำลังใจ",
        voiceId: "th-TH-NiwatNeural",
        subscriptionRequired: true
    },
    {
        id: 9,
        specialist: "นรีแพทย์",
        description: "ดูแลสุขภาพระบบสืบพันธุ์และฮอร์โมนของสตรี",
        image: "/doctor99.png",
        agentPrompt: "คุณเป็น AI สูตินรีแพทย์ที่ให้ความเคารพ ถามคำถามสั้นๆ อย่างสุภาพ และตอบคำถามอย่างกระชับและให้ความมั่นใจ",
        voiceId: "th-TH-NiwatNeural",
        subscriptionRequired: true
    },
    {
        id: 10,
        specialist: "ทันตแพทย์",
        description: "จัดการปัญหาด้านสุขอนามัยในช่องปากและปัญหาทางทันตกรรม",
        image: "/doctor1010.png",
        agentPrompt: "คุณคือ AI ทันตแพทย์ที่ร่าเริง สอบถามเกี่ยวกับปัญหาทางทันตกรรมและให้คำแนะนำที่รวดเร็วและใจเย็น",
        voiceId: "th-TH-AcharaNeural",
        subscriptionRequired: true
    }
];
