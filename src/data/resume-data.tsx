import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  BARClogo,
  RadicalXlogo,
  IITlogo

} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kush Suryavanshi",
  initials: "KS",
  location: "Boston, MA ",
  locationLink: "https://maps.app.goo.gl/5ZswAWrj9mGHyi6A8",
  about:
    "Machine learning Engineer focused on building products with extra attention to detail",
  summary:
    "As a prospective Machine Learning Engineer, I hold a Master's degree in Artificial Intelligence from Northeastern University, complemented by hands-on experience in data science and artificial intelligence gained through internships at BARC India, RadicalX, and the Indian Institute of Technology. Proficient in languages such as C++, Python, and MATLAB, and skilled in frameworks like Tensorflow and Pytorch, I specialize in developing innovative solutions for anomaly detection, hand gesture recognition, and multimodal emotion recognition. Eager to contribute my expertise to the field, I am well-prepared to embark on a journey as a Machine Learning Engineer, bringing a solid foundation in AI, deep learning, and data analytics.",
  avatarUrl: "https://avatars.githubusercontent.com/u/31185676?s=400&u=b8d62f590149979746daaff2f8fada98dd2b1bce&v=4",
  personalWebsiteUrl: "https://www.linkedin.com/in/kush-s/",
  contact: {
    email: "Kush2101999@gmail.com",
    tel: "+19172542665",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Kush210",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kush-s/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Northeastern University",
      degree: "Master's of Science in Artificial Intelligence",
      start: "2022",
      end: "2024",
      gpa: "3.6",
    },
    {
      school: "Indian Institute of Information Technology",
      degree: "Bachelor's of Technology in Smart Manufacturing",
      start: "2017",
      end: "2021",
      gpa: "8.73/10"
    },
  ],
  work: [
    {
      company: "BARC India",
      link: "https://www.barcindia.co.in/",
      badges: [],
      title: "Data Science Intern",
      logo: BARClogo,
      start: "July 2023",
      end: "August 2023",
      description:
        ["Conducted in-depth analysis of demographic survey data, resulting in a 20% improvement in targeting accuracy.",
        "Devised and implemented innovative algorithms, reducing processing time by 30% and enhancing accuracy by 15%.",
        "Collaborated with a dynamic team to transform raw data into meaningful insights for strategic planning."
      ].join('\n')
    },
    {
      company: "RadicalX",
      link: "https://www.radicalx.co/",
      badges: ["Remote"],
      title: "Artificial Intelligence Intern",
      logo: RadicalXlogo,
      start: "May 2023",
      end: "June 2023",
      description:
        [
          "Collaborated with the development team to design and implement AI-powered features and functionalities of the platform.",
          "Assisted in improving and refining the AI Dev Manager powered by GPT-3, utilizing natural language processing, machine learning, and deep learning technique that drove personalized recommendations and tailored learning paths for users."
        ].join('\n')
    },
    {
      company: "Indian Institute of Information Technology Bombay",
      link: "https://www.iitb.ac.in/",
      badges: ["Remote"],
      title: "Machine Learning Intern",
      logo: IITlogo,
      start: "2021",
      end: "2021",
      description:
        [
          "Developed a speech-to-text system utilizing Google Cloud, Pytorch, and Wavenet to convert voice recordings into text with 95% accuracy.",
          "Successfully implemented a neural voice cloning system that learned to synthesize audio, showcasing a 50% improvement in recognition rate."
        ].join('\n')
    }
  ],
  skills: [
    "C++","Python",
    "Tensorflow", "Pytorch", "scikit-Learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn",
    "Statistics", "Machine learning", "Deep Learning", "Data Analytics", "Natural Language Processing", "Computer Vision"
  ],
  projects: [
    {
      title: "Anomaly Detection in Chest X-ray Using Autoencoder Network",
      techStack: [
        "Autorcncoder",
        "Deep learning",
        "python",
        "Pytorch"
      ],
      description: [
        "Developed and implemented a novel anomaly detection method using dual-distribution discrepancy, resulting in a 14.6% improvement over the AE baseline and 10.8% over the MemAE baseline on  RSNA Pneumonia Detection Dataset.",
        "Utilized inter- and intra-discrepancy scores to identify anomalies in CXR datasets, achieving a 4.3% improvement over AE-U baseline on the VinBigData Chest X-ray Abnormalities Detection dataset.",
        "Conducted experiments on RSNA Pneumonia Detection Challenge and VinBigData Chest X-ray Abnormalities Detection, which resulted in the successful implementation of our anomaly detection method to improve performance by up to 14.6%."
      ].join('\n'),
      logo: [],
      link: {
        label: "Autoencoder based Anomaly detection",
        href: "https://github.com/Kush210/Anomaly-detection-",
      },
    },
    {
      title: "Multimodal Emotion Recognition using Recurrent Neural Networks",
      techStack: ["Multi-speaker", "RNN", "BiLSTM", "Tensorflow"],
      description:
        [
          "Developed hybrid models of BiLSTM and Dialogue RNN architectures on MELD Dataset for emotion classification achieving 67% maximum accuracy with a team of three.",
          "Utilized various techniques like Principal Component Analysis, signal processing, and Deep Learning to analyse multimodal data from various platforms.",
          "Tested 6 different modality combinations on a 5-fold cross-validation sample set resulting in an average precision of 62%."
        ].join('\n')
    },
    {
      title: "Neural Image caption generation with visual attention",
      techStack: ["Python", "Pytorch", "Attention mechanis"],
      description:
        [
          "Implemented a neural image captioning architecture, enhancing model performance by incorporating attention mechanisms for dynamic focus during caption generation, resulting in a 15% increase in caption accuracy.",
          "Utilized VGG and Inception V3 feature extractors to explore the impact of different visual representations on model performance, leading to a 10% improvement in image captioning quality.",
          "Achieved a BLUE-1 score of 36 and METEOR score of 10.04 by implementing architecture using VGG and Inception V3, providing a 20% faster training convergence than the Inception V3 feature extractor."
        ].join('\n'),
    }
  ],
} as const;
