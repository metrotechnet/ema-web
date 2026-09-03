// ===================================
// LANDING PAGE I18N & START FLOW
// ===================================

const START_URL = "https://imx-ema-demo.web.app/";

const EMA_I18N = {
    fr: {
        title: "EMA | Explication de la solution",
        "nav.ariaLabel": "Navigation principale",
        "nav.language": "Langue",
        "nav.menuToggleAria": "Ouvrir le menu des sections",
        "nav.context": "Contexte",
        "nav.solution": "Solution",
        "nav.usage": "Parcours",
        "nav.faq": "FAQ",
        "nav.impact": "Retombées",
        "nav.phases": "Phases",
        "nav.contact": "Contact",
        "nav.login": "Connexion",
        "nav.signup": "Inscription",
        "brand.logoAlt": "Logo EMA",
        "nav.startInterview": "Commencer",
        "hero.eyebrow": "Expert Memory Agent",
        "hero.title": "Préservez la mémoire de votre entreprise",
        "hero.lead": "EMA transforme votre expertise en connaissances structurées et réutilisables grâce à une entrevue guidée.",
        "hero.startButton": "S'inscrire",
        "start.modal.title": "Bienvenue chez EMA",
        "start.modal.message": "Cette version de démonstration vous permet de découvrir les principales fonctionnalités d'EMA.<br><br><strong>Comment ça marche</strong><br><ol style=\"margin:0.35rem 0 0.6rem 1.15rem;padding:0;\"><li>Définir votre processus ou l'expérience que vous voulez partager.</li><li>EMA va vous proposer un plan d'entrevue.</li><li>Par la suite, EMA vous posera une série de questions durant l'entrevue.</li><li>A la fin de l'entrevue, une fiche d'expertise sera produite et consolidée.</li><li>Finalement, vous pourrez poser vos questions sur l'expertise produite et EMA tentera de vous répondre.</li></ol>Dans toutes les étapes de cette démo, vous pouvez utiliser ERA, notre agent de rôle {{ROLE_AGENT_ICON}}, afin de répondre aux questions d'EMA.",
        "start.modal.confirm": "Commencer",
        "start.modal.cancel": "Annuler",
        "context.title": "Contexte de l'application",
        "context.p1": "Dans une organisation, une grande partie de l'expertise reste implicite : méthodes de travail, décisions récurrentes, critères de jugement, partenaires clés et exceptions apprises avec l'expérience.",
        "context.p2": "Cette connaissance est souvent dispersée dans les échanges, les habitudes d'équipe ou la mémoire individuelle. Lorsqu'une personne change de rôle ou quitte l'organisation, une partie de ce capital devient difficile à retrouver.",
        "solution.title": "Solution apportée : EMA",
        "solution.p1": "EMA se comporte comme un intervieweur intelligent : il avance question par question, structure l'échange autour d'un plan clair, explore chaque axe validé et fournit des synthèses intermédiaires avant de produire une fiche d'expertise finale.",
        "solution.p2": "Son objectif est de transformer l'expertise tacite en connaissances explicites, sans imposer à l'utilisateur la rédaction d'une documentation complète.",
        "solution.chip1": "Entrevue guidée",
        "solution.chip2": "Plan validé",
        "solution.chip3": "Synthèses contrôlées",
        "usage.title": "Comment ça marche",
        "usage.p1": "L'utilisateur suit un parcours en deux volets : d'abord une entrevue guidée pour structurer l'expertise, puis un espace chat pour interroger les connaissances produites et obtenir des réponses ciblées.",
        "how.subtitle": "Un parcours en 4 étapes.",
        "how.detailsToggle": "Voir les points clés",
        "how.nodeLabelDiscover": "Découverte",
        "how.nodeLabelPlan": "Entrevue",
        "how.nodeLabelInterview": "Validation",
        "how.nodeLabelSummary": "Partage",
        "usage.step1.title": "1. Démarrer",
        "usage.step1.desc": "Décrire le besoin ou le processus à documenter.",
        "usage.step2.title": "2. Valider le plan",
        "usage.step2.desc": "Confirmer ou ajuster les axes de l'entrevue.",
        "usage.step3.title": "3. Répondre",
        "usage.step3.desc": "Partager les pratiques, critères, outils et cas vécus.",
        "usage.step4.title": "4. Confirmer",
        "usage.step4.desc": "Valider les récapitulatifs et la fiche finale.",
        "usage.step5.title": "5. Poser vos questions",
        "usage.step5.desc": "Poser des questions sur l'expertise consolidée et obtenir des réponses contextuelles.",
        "how.step1Title": "Étape 1 – Découverte",
        "how.step1Intro": "Commencez par clarifier le sujet et son périmètre avant de lancer l'entrevue.",
        "how.step1Point1": "Définissez l'expertise, l'expérience ou le processus que vous souhaitez documenter.",
        "how.step1Point2": "EMA vous pose quelques questions afin de bien comprendre votre intention et le contexte.",
        "how.step1Point3": "EMA vous propose ensuite un plan de travail structurant les principaux sujets à explorer.",
        "how.step2Title": "Étape 2 – Entrevue",
        "how.step2Intro": "Approfondissez votre expertise à travers une conversation guidée et naturelle.",
        "how.step2Point1": "Répondez aux questions suggérées par EMA ou discutez librement de votre sujet.",
        "how.step2Point2": "EMA prend des notes, structure les informations recueillies et analyse les fichiers que vous ajoutez.",
        "how.step2Point3": "Consultez le résumé de l'entrevue, corrigez-le au besoin et interrogez EMA pour tester sa compréhension.",
        "how.step3Title": "Étape 3 – Validation",
        "how.step3Intro": "Assurez-vous que les connaissances recueillies reflètent fidèlement votre expertise.",
        "how.step3Point1": "Interrogez EMA pour vérifier sa compréhension de votre expertise.",
        "how.step3Point2": "Confirmez les informations justes et corrigez celles qui doivent être ajustées.",
        "how.step3Point3": "Complétez les éléments manquants afin d'obtenir une connaissance fiable et prête à être partagée.",
        "how.step4Title": "Étape 4 – Partage",
        "how.step4Intro": "Rendez votre expertise accessible aux personnes qui en ont besoin.",
        "how.step4Point1": "Partagez une expertise ou un groupe d'expertises avec les personnes de votre choix.",
        "how.step4Point2": "Les personnes autorisées peuvent interroger EMA pour accéder aux connaissances partagées.",
        "how.step4Point3": "Continuez à enrichir votre mémoire en documentant et en partageant de nouvelles expertises.",

        "faq.title": "FAQ",
        "faq.subtitle": "Questions fréquentes sur l'utilisation d'EMA.",
        "faq.q1": "Est-ce qu'on peut capturer tous les types d'expertise?",
        "faq.a1": "Oui. EMA utilise ses capacités d'analyse et ses connaissances générales pour vous proposer un plan de travail adapté à votre domaine, à votre expertise et à ce que vous souhaitez documenter.",
        "faq.q2": "Peut-on partager un ensemble d'expertises?",
        "faq.a2": "Oui. Regroupez vos expertises par thèmes et partagez ensuite le groupe. La personne qui reçoit l'invitation pourra interroger EMA sur l'ensemble des connaissances contenues dans ce thème en sélectionnant le groupe. Elle pourra également sélectionner une expertise précise pour obtenir des réponses plus ciblées.",
        "faq.q3": "Peut-on joindre différents types de documents?",
        "faq.a3": "Oui. Qu'il s'agisse de documents PDF, Word, texte ou Excel, EMA peut en extraire les informations pertinentes et les intégrer à sa base de connaissances. Vous pouvez également joindre des formulaires ou d'autres documents de référence afin d'enrichir l'expertise partagée et d'aider les personnes qui la consultent.",
        "faq.q4": "Est-ce que les documents et les informations sont sécurisés?",
        "faq.a4": "Oui. Les informations et les fichiers sont conservés sur une plateforme sécurisée. Vous contrôlez les personnes avec qui vous partagez vos connaissances et pouvez retirer un accès en tout temps. Vous gardez ainsi le contrôle sur vos expertises, vos documents et les personnes qui peuvent y accéder.",
        "usage.startButton": "Commencer l'entrevue",
        "impact.title": "Retombées",
        "impact.p1": "EMA facilite la capitalisation des connaissances, réduit la dépendance à la mémoire individuelle et accélère la production de contenus réutilisables pour l'onboarding, la formation, l'amélioration continue et le transfert d'expertise.",
        "impact.p2": "Les équipes peuvent mieux comparer les pratiques, repérer les zones grises et préserver les apprentissages issus de l'expérience réelle.",
        "phases.sectionTitle": "Feuille de route de développement",
        "phases.accordionToggle": "Afficher les détails des phases",
        "phases.featuresLabel": "Fonctionnalités clés",
        "phases.step1.title": "Phase 1 - Capture et valorisation de l'expertise",
        "phases.step1.desc": "La première phase permet aux organisations de capturer rapidement le savoir-faire de leurs employés grâce à des entrevues intelligentes guidées par l'IA. La plateforme transforme automatiquement les connaissances tacites en contenus structurés, consultables et réutilisables par l'ensemble de l'organisation.",
        "phases.step1.item1": "Gestion des organisations, équipes et utilisateurs",
        "phases.step1.item2": "Entrevues assistées par intelligence artificielle",
        "phases.step1.item3": "Reconnaissance vocale et transcription automatique",
        "phases.step1.item4": "Questions adaptatives et validation des informations recueillies",
        "phases.step1.item5": "Génération automatique de fiches d'expertise structurées",
        "phases.step1.item6": "Téléversement et association de documents de référence",
        "phases.step1.item7": "Base de connaissances centralisée",
        "phases.step1.item8": "Agent conversationnel permettant d'interroger l'expertise capturée",
        "phases.step2.title": "Phase 2 - Capture multimodale des connaissances",
        "phases.step2.desc": "Cette phase enrichit la collecte d'expertise en intégrant la vidéo, le partage d'écran et l'analyse de contenus visuels. EMA est alors capable de documenter non seulement ce que les experts savent, mais également ce qu'ils font.",
        "phases.step2.item1": "Enregistrement vidéo des entrevues et démonstrations",
        "phases.step2.item2": "Capture et partage d'écran",
        "phases.step2.item3": "Analyse automatisée d'images, de documents et de contenus visuels",
        "phases.step2.item4": "Extraction de procédures et de méthodes de travail",
        "phases.step2.item5": "Génération automatique de guides illustrés et de documentation opérationnelle",
        "phases.step3.title": "Phase 3 - Mémoire organisationnelle intelligente",
        "phases.step3.desc": "À cette étape, les connaissances individuelles sont consolidées pour créer une véritable mémoire organisationnelle. L'entreprise bénéficie d'un référentiel unique regroupant l'expertise de plusieurs employés et les connaissances documentaires existantes.",
        "phases.step3.item1": "Consolidation des connaissances provenant de plusieurs experts",
        "phases.step3.item2": "Validation collaborative et enrichissement des contenus",
        "phases.step3.item3": "Intégration avec les documents et systèmes de l'entreprise",
        "phases.step3.item4": "Recherche avancée à travers l'ensemble des connaissances",
        "phases.step3.item5": "Agent conversationnel global capable de répondre à partir de toute la mémoire organisationnelle",
        "phases.step4.title": "Phase 4 - Intelligence organisationnelle et relève stratégique",
        "phases.step4.desc": "La dernière phase transforme les connaissances accumulées en intelligence d'affaires. EMA aide les gestionnaires à identifier les risques, planifier la relève et développer les compétences stratégiques de l'organisation.",
        "phases.step4.item1": "Identification des experts et connaissances critiques",
        "phases.step4.item2": "Analyse des risques liés à la perte d'expertise",
        "phases.step4.item3": "Détection des lacunes de connaissances et des besoins de formation",
        "phases.step4.item4": "Cartographie des compétences organisationnelles",
        "phases.step4.item5": "Soutien à la planification de la relève",
        "phases.step4.item6": "Tableaux de bord décisionnels et indicateurs stratégiques",
        "phases.step4.item7": "Génération automatisée de contenus de formation et de transfert de connaissances",
        "footer.ariaLabel": "Contact IMX Technologie",
        "footer.contact": "Cette solution est développée par <strong><a href=\"https://imxtech.ca\" target=\"_blank\" rel=\"noopener noreferrer\">IMX Technologie inc.</a></strong>. Pour plus d'information, contactez <a href=\"mailto:info@imxtech.ca\">info@imxtech.ca</a>."
    },
    en: {
        title: "EMA | Solution Overview",
        "nav.ariaLabel": "Main navigation",
        "nav.language": "Language",
        "nav.menuToggleAria": "Open section menu",
        "nav.context": "Context",
        "nav.solution": "Solution",
        "nav.usage": "Journey",
        "nav.faq": "FAQ",
        "nav.impact": "Impact",
        "nav.phases": "Phases",
        "nav.contact": "Contact",
        "nav.login": "Login",
        "nav.signup": "Sign up",
        "brand.logoAlt": "EMA logo",
        "nav.startInterview": "Start",
        "hero.eyebrow": "Expert Memory Agent",
        "hero.title": "Preserve your company's memory",
        "hero.lead": "EMA transforms your expertise into structured, reusable knowledge through a guided interview.",
        "hero.startButton": "Sign up",
        "start.modal.title": "Welcome to EMA",
        "start.modal.message": "This demo lets you discover EMA's main features.<br><br><strong>How it works</strong><br><ol style=\"margin:0.35rem 0 0.6rem 1.15rem;padding:0;\"><li>Define the process or expertise you want to share.</li><li>EMA proposes an interview plan.</li><li>Then EMA asks a series of questions during the interview.</li><li>At the end of the interview, a consolidated expertise profile is produced.</li><li>Finally, you can ask questions about the produced expertise and EMA will try to answer.</li></ol>At every step of this demo, you can use ERA, our role agent {{ROLE_AGENT_ICON}}, to answer EMA's questions.",
        "start.modal.confirm": "Continue",
        "start.modal.cancel": "Cancel",
        "context.title": "Application context",
        "context.p1": "In an organization, a large part of expertise remains implicit: working methods, recurring decisions, judgment criteria, key partners, and exceptions learned through experience.",
        "context.p2": "This knowledge is often scattered across conversations, team habits, or individual memory. When someone changes role or leaves the organization, part of this capital becomes hard to recover.",
        "solution.title": "Provided solution : EMA",
        "solution.p1": "EMA behaves like an intelligent interviewer: it moves forward one question at a time, structures the conversation around a clear plan, explores each validated axis, and delivers interim syntheses before producing a final expertise profile.",
        "solution.p2": "Its goal is to turn tacit expertise into explicit knowledge, without forcing the user to write complete documentation.",
        "solution.chip1": "Guided interview",
        "solution.chip2": "Validated plan",
        "solution.chip3": "Controlled summaries",
        "usage.title": "How it works",
        "usage.p1": "The user follows a two-part journey: first a guided interview to structure expertise, then a chat space to query the produced knowledge and get targeted answers.",
        "how.subtitle": "A 4-step journey.",
        "how.detailsToggle": "View key points",
        "how.nodeLabelDiscover": "Discovery",
        "how.nodeLabelPlan": "Interview",
        "how.nodeLabelInterview": "Validation",
        "how.nodeLabelSummary": "Sharing",
        "usage.step1.title": "1. Start",
        "usage.step1.desc": "Describe the need or process to document.",
        "usage.step2.title": "2. Validate the plan",
        "usage.step2.desc": "Confirm or adjust the interview axes.",
        "usage.step3.title": "3. Answer",
        "usage.step3.desc": "Share practices, criteria, tools, and real cases.",
        "usage.step4.title": "4. Confirm",
        "usage.step4.desc": "Validate summaries and the final profile.",
        "usage.step5.title": "5. Ask your questions",
        "usage.step5.desc": "Ask questions about consolidated expertise and receive contextual answers.",
        "how.step1Title": "Step 1 - Discovery",
        "how.step1Intro": "Start by clarifying the topic and its scope before beginning the interview.",
        "how.step1Point1": "Define the expertise, experience, or process you want to document.",
        "how.step1Point2": "EMA asks a few questions to better understand your intent and context.",
        "how.step1Point3": "EMA then proposes a work plan that structures the main topics to explore.",
        "how.step2Title": "Step 2 - Interview",
        "how.step2Intro": "Deepen your expertise through a guided and natural conversation.",
        "how.step2Point1": "Answer the questions suggested by EMA or discuss your topic freely.",
        "how.step2Point2": "EMA takes notes, structures the collected information, and analyzes the files you add.",
        "how.step2Point3": "Review the interview summary, correct it if needed, and question EMA to test its understanding.",
        "how.step3Title": "Step 3 - Validation",
        "how.step3Intro": "Make sure the collected knowledge faithfully reflects your expertise.",
        "how.step3Point1": "Question EMA to verify its understanding of your expertise.",
        "how.step3Point2": "Confirm the accurate information and correct anything that needs to be adjusted.",
        "how.step3Point3": "Complete any missing elements so you end up with reliable knowledge ready to be shared.",
        "how.step4Title": "Step 4 - Sharing",
        "how.step4Intro": "Make your expertise accessible to the people who need it.",
        "how.step4Point1": "Share an expertise or a group of expertise items with the people you choose.",
        "how.step4Point2": "Authorized people can question EMA to access the shared knowledge.",
        "how.step4Point3": "Keep enriching your memory by documenting and sharing new expertise.",

        "faq.title": "FAQ",
        "faq.subtitle": "Frequently asked questions about using EMA.",
        "faq.q1": "Can we capture all types of expertise?",
        "faq.a1": "Yes. EMA uses its analysis capabilities and general knowledge to suggest a work plan adapted to your domain, your expertise, and what you want to document.",
        "faq.q2": "Can we share a group of expertise items?",
        "faq.a2": "Yes. Group your expertise by theme and then share the group. The person receiving the invitation can question EMA on the full set of knowledge in that theme by selecting the group. They can also select a specific expertise for more targeted answers.",
        "faq.q3": "Can we attach different kinds of documents?",
        "faq.a3": "Yes. Whether they are PDF, Word, text, or Excel documents, EMA can extract relevant information and add it to its knowledge base. You can also attach forms or other reference documents to enrich the shared expertise and help the people who consult it.",
        "faq.q4": "Are the documents and information secure?",
        "faq.a4": "Yes. Information and files are stored on a secure platform. You control who you share your knowledge with and can revoke access at any time. That way, you keep control of your expertise, your documents, and who can access them.",
        "usage.startButton": "Start the interview",
        "impact.title": "Outcomes",
        "impact.p1": "EMA helps capture knowledge, reduces dependency on individual memory, and speeds up production of reusable content for onboarding, training, continuous improvement, and expertise transfer.",
        "impact.p2": "Teams can better compare practices, identify gray zones, and preserve learnings from real-world experience.",
        "phases.sectionTitle": "Development roadmap",
        "phases.accordionToggle": "Show phase details",
        "phases.featuresLabel": "Key features",
        "phases.step1.title": "Phase 1 - Expertise capture and enhancement",
        "phases.step1.desc": "The first phase enables organizations to quickly capture employee know-how through intelligent AI-guided interviews. The platform automatically transforms tacit knowledge into structured content that is searchable and reusable across the organization.",
        "phases.step1.item1": "Organization, team, and user management",
        "phases.step1.item2": "AI-assisted interviews",
        "phases.step1.item3": "Speech recognition and automatic transcription",
        "phases.step1.item4": "Adaptive questions and validation of collected information",
        "phases.step1.item5": "Automatic generation of structured expertise profiles",
        "phases.step1.item6": "Upload and association of reference documents",
        "phases.step1.item7": "Centralized knowledge base",
        "phases.step1.item8": "Conversational agent to query captured expertise",
        "phases.step2.title": "Phase 2 - Multimodal knowledge capture",
        "phases.step2.desc": "This phase enriches expertise collection by integrating video, screen sharing, and visual content analysis. EMA can then document not only what experts know, but also what they do.",
        "phases.step2.item1": "Video recording of interviews and demonstrations",
        "phases.step2.item2": "Screen capture and sharing",
        "phases.step2.item3": "Automated analysis of images, documents, and visual content",
        "phases.step2.item4": "Extraction of procedures and working methods",
        "phases.step2.item5": "Automatic generation of illustrated guides and operational documentation",
        "phases.step3.title": "Phase 3 - Intelligent organizational memory",
        "phases.step3.desc": "At this stage, individual knowledge is consolidated to create true organizational memory. The company benefits from a single repository that brings together expertise from multiple employees and existing documentary knowledge.",
        "phases.step3.item1": "Consolidation of knowledge from multiple experts",
        "phases.step3.item2": "Collaborative validation and enrichment of content",
        "phases.step3.item3": "Integration with company documents and systems",
        "phases.step3.item4": "Advanced search across all knowledge",
        "phases.step3.item5": "Global conversational agent able to answer from the entire organizational memory",
        "phases.step4.title": "Phase 4 - Organizational intelligence and strategic succession",
        "phases.step4.desc": "The final phase transforms accumulated knowledge into business intelligence. EMA helps managers identify risks, plan succession, and develop the organization's strategic capabilities.",
        "phases.step4.item1": "Identification of critical experts and knowledge",
        "phases.step4.item2": "Risk analysis related to expertise loss",
        "phases.step4.item3": "Detection of knowledge gaps and training needs",
        "phases.step4.item4": "Mapping of organizational competencies",
        "phases.step4.item5": "Support for succession planning",
        "phases.step4.item6": "Decision-support dashboards and strategic indicators",
        "phases.step4.item7": "Automated generation of training and knowledge transfer content",
        "footer.ariaLabel": "Contact IMX Technologie",
        "footer.contact": "This solution is developed by <strong><a href=\"https://imxtech.ca\" target=\"_blank\" rel=\"noopener noreferrer\">IMX Technologie inc.</a></strong>. For more information, contact <a href=\"mailto:info@imxtech.ca\">info@imxtech.ca</a>."
    },
    es: {
        title: "EMA | Explicación de la solución",
        "nav.ariaLabel": "Navegación principal",
        "nav.language": "Idioma",
        "nav.menuToggleAria": "Abrir menu de secciones",
        "nav.context": "Contexto",
        "nav.solution": "Solucion",
        "nav.usage": "Recorrido",
        "nav.faq": "FAQ",
        "nav.impact": "Impacto",
        "nav.phases": "Fases",
        "nav.contact": "Contacto",
        "nav.login": "Iniciar sesión",
        "nav.signup": "Registrarse",
        "brand.logoAlt": "Logo de EMA",
        "nav.startInterview": "Empezar",
        "hero.eyebrow": "Expert Memory Agent",
        "hero.title": "Preserva la memoria de tu empresa",
        "hero.lead": "EMA transforma tu experiencia en conocimiento estructurado y reutilizable mediante una entrevista guiada.",
        "hero.startButton": "Registrarse",
        "start.modal.title": "Bienvenido a EMA",
        "start.modal.message": "Esta demo te permite descubrir las principales funcionalidades de EMA.<br><br><strong>Como funciona</strong><br><ol style=\"margin:0.35rem 0 0.6rem 1.15rem;padding:0;\"><li>Define el proceso o la experiencia que quieres compartir.</li><li>EMA te propone un plan de entrevista.</li><li>Luego EMA te hara una serie de preguntas durante la entrevista.</li><li>Al final de la entrevista, se generara y consolidara una ficha de experiencia.</li><li>Finalmente, podras hacer preguntas sobre la experiencia producida y EMA intentara responder.</li></ol>En todas las etapas de esta demo, puedes usar ERA, nuestro agente de rol {{ROLE_AGENT_ICON}}, para responder a las preguntas de EMA.",
        "start.modal.confirm": "Continuar",
        "start.modal.cancel": "Cancelar",
        "context.title": "Contexto de la aplicación",
        "context.p1": "En una organización, gran parte de la experiencia sigue siendo implícita: métodos de trabajo, decisiones recurrentes, criterios de juicio, socios clave y excepciones aprendidas con la experiencia.",
        "context.p2": "Este conocimiento suele estar disperso en intercambios, hábitos de equipo o memoria individual. Cuando una persona cambia de rol o deja la organización, parte de ese capital se vuelve difícil de recuperar.",
        "solution.title": "Solución propuesta : EMA",
        "solution.p1": "EMA se comporta como un entrevistador inteligente: avanza pregunta por pregunta, estructura el intercambio alrededor de un plan claro, explora cada eje validado y entrega síntesis intermedias antes de generar una ficha final de experiencia.",
        "solution.p2": "Su objetivo es transformar la experiencia tácita en conocimiento explícito, sin imponer a la persona usuaria la redacción de una documentación completa.",
        "solution.chip1": "Entrevista guiada",
        "solution.chip2": "Plan validado",
        "solution.chip3": "Resúmenes controlados",
        "usage.title": "Cómo funciona",
        "usage.p1": "La persona sigue un recorrido en dos partes: primero una entrevista guiada para estructurar la experiencia y luego un espacio de chat para consultar el conocimiento generado y obtener respuestas específicas.",
        "how.subtitle": "Un recorrido en 4 etapas.",
        "how.detailsToggle": "Ver puntos clave",
        "how.nodeLabelDiscover": "Descubrimiento",
        "how.nodeLabelPlan": "Entrevista",
        "how.nodeLabelInterview": "Validación",
        "how.nodeLabelSummary": "Compartir",
        "usage.step1.title": "1. Iniciar",
        "usage.step1.desc": "Describir la necesidad o el proceso a documentar.",
        "usage.step2.title": "2. Validar el plan",
        "usage.step2.desc": "Confirmar o ajustar los ejes de la entrevista.",
        "usage.step3.title": "3. Responder",
        "usage.step3.desc": "Compartir prácticas, criterios, herramientas y casos reales.",
        "usage.step4.title": "4. Confirmar",
        "usage.step4.desc": "Validar los resúmenes y la ficha final.",
        "usage.step5.title": "5. Haz tus preguntas",
        "usage.step5.desc": "Hacer preguntas sobre la experiencia consolidada y obtener respuestas contextuales.",
        "how.step1Title": "Paso 1 - Descubrimiento",
        "how.step1Intro": "Empieza aclarando el tema y su alcance antes de iniciar la entrevista.",
        "how.step1Point1": "Define la experiencia, la trayectoria o el proceso que deseas documentar.",
        "how.step1Point2": "EMA te hace algunas preguntas para entender mejor tu intención y el contexto.",
        "how.step1Point3": "EMA te propone luego un plan de trabajo que estructura los principales temas por explorar.",
        "how.step2Title": "Paso 2 - Entrevista",
        "how.step2Intro": "Profundiza en tu experiencia mediante una conversación guiada y natural.",
        "how.step2Point1": "Responde a las preguntas sugeridas por EMA o conversa libremente sobre tu tema.",
        "how.step2Point2": "EMA toma notas, estructura la información recopilada y analiza los archivos que agregas.",
        "how.step2Point3": "Consulta el resumen de la entrevista, corrígelo si es necesario e interroga a EMA para probar su comprensión.",
        "how.step3Title": "Paso 3 - Validación",
        "how.step3Intro": "Asegúrate de que los conocimientos recopilados reflejen fielmente tu experiencia.",
        "how.step3Point1": "Interroga a EMA para verificar su comprensión de tu experiencia.",
        "how.step3Point2": "Confirma la información correcta y corrige aquello que deba ajustarse.",
        "how.step3Point3": "Completa los elementos faltantes para obtener un conocimiento fiable y listo para compartir.",
        "how.step4Title": "Paso 4 - Compartir",
        "how.step4Intro": "Haz que tu experiencia esté disponible para las personas que la necesitan.",
        "how.step4Point1": "Comparte una experiencia o un grupo de experiencias con las personas que elijas.",
        "how.step4Point2": "Las personas autorizadas pueden consultar a EMA para acceder al conocimiento compartido.",
        "how.step4Point3": "Sigue enriqueciendo tu memoria documentando y compartiendo nuevas experiencias.",
        "faq.title": "FAQ",
        "faq.subtitle": "Preguntas frecuentes sobre el uso de EMA.",
        "faq.q1": "¿Se pueden capturar todo tipo de conocimientos?",
        "faq.a1": "Sí. EMA usa sus capacidades de análisis y su conocimiento general para proponerte un plan de trabajo adaptado a tu área, a tu experiencia y a lo que quieres documentar.",
        "faq.q2": "¿Se puede compartir un grupo de conocimientos?",
        "faq.a2": "Sí. Agrupa tus conocimientos por temas y luego comparte el grupo. La persona que reciba la invitación podrá consultar a EMA sobre todo el conocimiento contenido en ese tema seleccionando el grupo. También podrá seleccionar una experiencia concreta para obtener respuestas más específicas.",
        "faq.q3": "¿Se pueden adjuntar distintos tipos de documentos?",
        "faq.a3": "Sí. Ya sean documentos PDF, Word, texto o Excel, EMA puede extraer la información relevante e incorporarla a su base de conocimiento. También puedes adjuntar formularios u otros documentos de referencia para enriquecer la experiencia compartida y ayudar a las personas que la consultan.",
        "faq.q4": "¿Los documentos y la información están seguros?",
        "faq.a4": "Sí. La información y los archivos se conservan en una plataforma segura. Tú controlas con quién compartes tus conocimientos y puedes retirar el acceso en cualquier momento. Así mantienes el control sobre tus conocimientos, tus documentos y quién puede acceder a ellos.",
        "usage.startButton": "Empezar la entrevista",
        "impact.title": "Impacto",
        "impact.p1": "EMA facilita la capitalización del conocimiento, reduce la dependencia de la memoria individual y acelera la producción de contenidos reutilizables para onboarding, formación, mejora continua y transferencia de experiencia.",
        "impact.p2": "Los equipos pueden comparar mejor las prácticas, detectar zonas grises y preservar aprendizajes surgidos de la experiencia real.",
        "phases.sectionTitle": "Hoja de ruta de desarrollo",
        "phases.accordionToggle": "Mostrar detalles de las fases",
        "phases.featuresLabel": "Funcionalidades clave",
        "phases.step1.title": "Fase 1 - Captura y valorización de la experiencia",
        "phases.step1.desc": "La primera fase permite a las organizaciones capturar rápidamente el saber hacer de sus empleados mediante entrevistas inteligentes guiadas por IA. La plataforma transforma automáticamente el conocimiento tácito en contenidos estructurados, consultables y reutilizables en toda la organización.",
        "phases.step1.item1": "Gestión de organizaciones, equipos y usuarios",
        "phases.step1.item2": "Entrevistas asistidas por inteligencia artificial",
        "phases.step1.item3": "Reconocimiento de voz y transcripción automática",
        "phases.step1.item4": "Preguntas adaptativas y validación de la información recopilada",
        "phases.step1.item5": "Generación automática de fichas de experiencia estructuradas",
        "phases.step1.item6": "Carga y asociación de documentos de referencia",
        "phases.step1.item7": "Base de conocimiento centralizada",
        "phases.step1.item8": "Agente conversacional para consultar la experiencia capturada",
        "phases.step2.title": "Fase 2 - Captura multimodal del conocimiento",
        "phases.step2.desc": "Esta fase enriquece la recopilación de experiencia al integrar video, uso compartido de pantalla y análisis de contenido visual. EMA puede entonces documentar no solo lo que los expertos saben, sino también lo que hacen.",
        "phases.step2.item1": "Grabación en video de entrevistas y demostraciones",
        "phases.step2.item2": "Captura y uso compartido de pantalla",
        "phases.step2.item3": "Análisis automatizado de imágenes, documentos y contenido visual",
        "phases.step2.item4": "Extracción de procedimientos y métodos de trabajo",
        "phases.step2.item5": "Generación automática de guías ilustradas y documentación operativa",
        "phases.step3.title": "Fase 3 - Memoria organizacional inteligente",
        "phases.step3.desc": "En esta etapa, el conocimiento individual se consolida para crear una verdadera memoria organizacional. La empresa se beneficia de un repositorio único que reúne la experiencia de varios empleados y el conocimiento documental existente.",
        "phases.step3.item1": "Consolidación del conocimiento proveniente de varios expertos",
        "phases.step3.item2": "Validación colaborativa y enriquecimiento de contenidos",
        "phases.step3.item3": "Integración con documentos y sistemas de la empresa",
        "phases.step3.item4": "Búsqueda avanzada en todo el conocimiento",
        "phases.step3.item5": "Agente conversacional global capaz de responder desde toda la memoria organizacional",
        "phases.step4.title": "Fase 4 - Inteligencia organizacional y relevo estratégico",
        "phases.step4.desc": "La última fase transforma el conocimiento acumulado en inteligencia de negocio. EMA ayuda a los gestores a identificar riesgos, planificar el relevo y desarrollar las capacidades estratégicas de la organización.",
        "phases.step4.item1": "Identificación de expertos y conocimientos críticos",
        "phases.step4.item2": "Análisis de riesgos vinculados a la pérdida de experiencia",
        "phases.step4.item3": "Detección de brechas de conocimiento y necesidades de formación",
        "phases.step4.item4": "Mapeo de competencias organizacionales",
        "phases.step4.item5": "Apoyo a la planificación del relevo",
        "phases.step4.item6": "Paneles de control para decisiones e indicadores estratégicos",
        "phases.step4.item7": "Generación automatizada de contenidos de formación y transferencia de conocimiento",
        "footer.ariaLabel": "Contacto IMX Technologie",
        "footer.contact": "Esta solución es desarrollada por <strong><a href=\"https://imxtech.ca\" target=\"_blank\" rel=\"noopener noreferrer\">IMX Technologie inc.</a></strong>. Para más información, contacta a <a href=\"mailto:info@imxtech.ca\">info@imxtech.ca</a>."
    }
};

/**
 * Resolve the landing page language from the URL.
 * @returns {string}
 */
function resolveLang() {
    // Etape 1: Lire la langue depuis l'URL et verifier qu'elle est supportee.
    const supported = ["fr", "en", "es"];
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (supported.includes(fromUrl)) return fromUrl;
    // Etape 2: Retomber sur le francais si la valeur est absente/invalide.
    return "fr";
}

/**
 * Apply landing-page translations and language-aware links.
 * @param {string} lang
 */
function applyI18n(lang) {
    // Etape 1: Charger le dictionnaire et mettre a jour titre/lang HTML.
    const dict = EMA_I18N[lang] || EMA_I18N.fr;
    document.documentElement.lang = lang;
    document.title = dict.title || document.title;

    // Etape 2: Appliquer les textes et attributs localises.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const key = el.getAttribute("data-i18n-alt");
        if (dict[key]) {
            el.setAttribute("alt", dict[key]);
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria-label");
        if (dict[key]) {
            el.setAttribute("aria-label", dict[key]);
        }
    });

    // Etape 3: Synchroniser les liens dynamiques vers la bonne langue.
    const startLink = document.getElementById("start-link");
    if (startLink) {
        startLink.setAttribute("href", `/index.html?lang=${lang}`);
    }

    const topbarLanguageSelector = document.getElementById("topbar-language-selector");
    if (topbarLanguageSelector) {
        topbarLanguageSelector.value = lang;
    }

    const heroStartLink = document.getElementById("hero-start-link");
    if (heroStartLink) {
        heroStartLink.setAttribute("href", START_URL);
    }

    const usageStartLink = document.getElementById("usage-start-link");
    if (usageStartLink) {
        usageStartLink.setAttribute("href", START_URL);
    }

    const brandLink = document.getElementById("brand-link");
    if (brandLink) {
        brandLink.setAttribute("href", `/?lang=${lang}`);
    }
}

/**
 * Show the landing start confirmation dialog.
 * @param {string} lang
 * @returns {Promise<boolean>}
 */
async function confirmLandingStart(lang) {
    // Etape 1: Construire les libelles de la popup selon la langue.
    const dict = EMA_I18N[lang] || EMA_I18N.fr;
    const title = dict["start.modal.title"] || "Bienvenue chez EMA";
    const roleAgentIconHtml = '<span style="display:inline-flex;align-items:center;justify-content:center;width:1.6rem;height:1.6rem;border-radius:0.5rem;background:#f59e0b;color:#ffffff;vertical-align:middle;margin-left:0.25rem;"><i class="bi bi-person-gear" aria-hidden="true" style="font-size:0.9rem;line-height:1;"></i></span>';
    const rawMessage = String(dict["start.modal.message"] || "Bienvenue")
        .replace(/\{\{ROLE_AGENT_ICON\}\}/g, roleAgentIconHtml);
    const confirmLabel = dict["start.modal.confirm"] || "Continuer";
    const cancelLabel = dict["start.modal.cancel"] || "Annuler";

    // Etape 2: Mettre en forme visuellement la note ERA.
    let formattedMessage = rawMessage;
    const listSplit = rawMessage.split("</ol>");
    if (listSplit.length >= 2) {
        const introAndSteps = `${listSplit[0]}</ol>`;
        const eraNote = listSplit.slice(1).join("</ol>").trim();
        if (eraNote) {
            formattedMessage = [
                introAndSteps,
                `<div style="margin-top:0.7rem;padding:0.75rem 0.85rem;border-radius:10px;background:#fff7d6;border:1px solid #f2d675;color:#5b4a00;font-weight:600;">`,
                `${eraNote}`,
                `</div>`,
            ].join("");
        }
    }

    // Etape 3: Afficher la popup de confirmation.
    const popupHtml = `
        <div style="text-align:left;line-height:1.55;font-size:0.98rem;color:#1f2937;">
            ${formattedMessage}
        </div>
    `;

    if (window.Swal && typeof window.Swal.fire === "function") {
        const result = await window.Swal.fire({
            title,
            html: popupHtml,
            icon: "info",
            confirmButtonText: confirmLabel,
            confirmButtonColor: "#f2b705",
            showCancelButton: true,
            cancelButtonText: cancelLabel,
            width: 760,
        });
        return Boolean(result && result.isConfirmed);
    }

    return window.confirm(`${title}\n\n${message}`);
}

/**
 * Bind the landing-page start action once per element.
 * @param {HTMLElement | null} linkElement
 */
function bindLandingStartAction(linkElement) {
    if (!linkElement || linkElement.dataset.startBound === "1") return;

    // No forced navigation: destination is intentionally left for later configuration.
    if (START_URL === "#") return;

    linkElement.dataset.startBound = "1";

    linkElement.addEventListener("click", async (event) => {
        event.preventDefault();
        const lang = resolveLang();
        const confirmed = await confirmLandingStart(lang);
        if (!confirmed) return;
        window.open(START_URL, "_blank", "noopener,noreferrer");
    });
}

/**
 * Bind the compact mobile menu toggle on the landing page.
 */
function bindMobileMenuToggle() {
    const navbar = document.querySelector(".slim-navbar");
    const burger = document.getElementById("slim-burger");
    const menu = document.getElementById("slim-menu");
    if (!navbar || !burger || !menu || burger.dataset.menuBound === "1") return;

    burger.dataset.menuBound = "1";
    const closeMenu = () => {
        navbar.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
        const willOpen = !navbar.classList.contains("menu-open");
        navbar.classList.toggle("menu-open", willOpen);
        burger.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
}

/**
 * Force the landing page to use the canonical root path.
 */
function normalizeLandingPath() {
    const allowed = ["/", "/index.html"];
    if (allowed.includes(window.location.pathname)) return;

    const url = new URL(window.location.href);
    url.pathname = "/";
    window.history.replaceState({}, "", url);
}

const topbarLanguageSelector = document.getElementById("topbar-language-selector");
if (topbarLanguageSelector) {
    topbarLanguageSelector.addEventListener("change", (event) => {
        const supported = ["fr", "en", "es"];
        const requestedLang = String(event.target.value || "fr");
        const nextLang = supported.includes(requestedLang) ? requestedLang : "fr";
        const url = new URL(window.location.href);
        url.searchParams.set("lang", nextLang);
        window.history.replaceState({}, "", url);
        applyI18n(nextLang);
    });
}

normalizeLandingPath();
applyI18n(resolveLang());
bindMobileMenuToggle();

bindLandingStartAction(document.getElementById("hero-start-link"));
bindLandingStartAction(document.getElementById("usage-start-link"));
