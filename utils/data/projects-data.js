export const projectsData = [
    {
        id: 1,
        name: 'Dockie – AI-Powered Smart File Explorer',
        description: "Dockie is an AI-driven desktop application that transforms the way users interact with their files. It performs OCR on documents, summarizes content using LLMs (Gemini), and enables natural language search across the user's local file system. Built with speed in mind, Dockie supports multithreaded processing and a vector-based semantic search engine using FAISS. Designed to act like a personal assistant, it makes file retrieval effortless and intelligent.",
        tools: ['Python', 'Flutter', 'REST APIs', 'LLM', 'OCR', "Gemini", 'FAISS', 'SQLite', 'Multithreading', 'File I/O'],
        role: 'AI Engineer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Jarvis – Real-Time AI Voice Assistant',
        description: 'Jarvis is a fully voice-controlled personal AI assistant built with a focus on personalization and long-term memory. It streams microphone input to Whisper for speech recognition, queries Gemini Flash for intelligent responses, and uses Piper for low-latency TTS. Memory is persistently stored in a Neo4j graph database, enabling complex recall, context tracking, and deep reasoning over time. Jarvis orchestrates real-time input/output while maintaining a scalable, modular architecture — a research-level AI system in the making.',
        tools: ['Langchain', 'Llamaindex','Whisper (STT)', 'Piper (TTS)', 'Gemini', 'WebSockets', 'Python', 'Neo4j (Graph Memory)', 'Time-Series Logging'],
        role: 'AI Engineer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'iBuy – Cashback Loyalty Platform',
        description: 'iBuy is a cashback platform where users commit to spending a target amount at a store. They upload receipts, which are automatically parsed using OCR for verification. The platform tracks progress and issues cashback upon completion. Built with robust back-end logic and an intuitive interface, iBuy blends AI utility with real-world finance workflows — optimizing for fraud prevention and user retention.',
        tools: ['Java', 'Flutter', 'Python', 'Real time', 'GCP', 'Mobile App Development', 'Cross-platform', 'React.js'],
        code: '',
        role: 'Lead Full Stack Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'AttendIt – Secure AI-Based Attendance System',
        description: "AttendIt is a mobile attendance solution combining face recognition, GPS validation, and device-locking to ensure secure, tamper-proof attendance. Designed for educational institutions and corporate environments, the app enforces strict authenticity checks, making false check-ins virtually impossible. It demonstrates applied machine learning and mobile-first engineering in a privacy-conscious framework.",
        tools: ['Android (Java/Kotlin)', 'Firebase', 'Face Recognition','GPS', 'REST APIs', 'AWS', 'Amplify'],
        code: '',
        demo: '',
        role: 'Lead Full Stack Developer',
    },
    {
        id: 5,
        name: 'Project Jarvis – AI Traffic Violation Detector',
        description: "This project uses deep learning to analyze dashcam footage and detect traffic rule violations such as red-light jumps or illegal turns. Built using YOLOv5 for object detection and DeepSORT for multi-object tracking, it processes video streams frame-by-frame and flags violations based on movement patterns. It demonstrates real-time video analytics, model integration, and deployment-ready computer vision for smart transport systems.",
        tools: ['Python', 'OpenCV', 'YOLOv5', 'Computer Vision', 'Flask', 'Android (Java/Kotlin)', 'Firebase'],
        code: '',
        demo: '',
        role: 'Lead Machine Learning Engineer',
    },
    {
        id: 6,
        name: 'Signful – Real-Time Sign Language Translator',
        description: "Signful is a real-time ASL-to-text translator that uses computer vision and deep learning to interpret hand gestures through webcam input. Built using MediaPipe and a custom-trained neural network, it processes frames live and outputs human-readable text to improve accessibility. This project showcases my ability to deploy ML models in production environments with live user interaction and performance optimization.",
        tools: ["Python", "OpenCV", "MediaPipe", "TensorFlow/Keras", "Flask", 'Android (Java/Kotlin)', 'Firebase'],
        code: '',
        demo: '',
        role: 'Lead Machine Learning Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },