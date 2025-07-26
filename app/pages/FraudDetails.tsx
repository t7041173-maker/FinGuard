import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import {
  BookOpen,
  Search,
  Mail,
  Phone,
  CreditCard,
  User,
  Globe,
  Smartphone,
  X,
  ExternalLink,
  TriangleAlert as AlertTriangle,
  Shield,
  CircleCheck as CheckCircle,
  Info,
  DollarSign,
  Lock,
  Eye,
} from "lucide-react-native";

const fraudTypes = [
  {
    id: 1,
    title: "Email Phishing",
    icon: Mail,
    color: "#3B82F6",
    description: "Fraudulent emails designed to steal personal information",
    detailedDescription:
      "Email phishing is one of the most common and dangerous forms of cybercrime. Attackers send emails that appear to come from legitimate sources like banks, social media platforms, or government agencies. These emails are carefully crafted to look authentic, often using official logos, colors, and language patterns that mimic real organizations.",
    howItWorks: [
      "Scammers create fake emails that look like they're from trusted sources",
      "They use psychological tricks like urgency, fear, or rewards to motivate action",
      "Victims are directed to fake websites that steal login credentials",
      "Personal information is harvested and used for identity theft or financial fraud",
      "Sometimes malware is installed through malicious attachments or links",
    ],
    commonTargets: [
      "Banking and financial institutions",
      "Social media platforms (Facebook, Instagram, LinkedIn)",
      "E-commerce sites (Amazon, eBay, online stores)",
      "Government agencies (IRS, Social Security, DMV)",
      "Email providers (Gmail, Yahoo, Outlook)",
      "Streaming services (Netflix, Spotify, Disney+)",
    ],
    redFlags: [
      "Generic greetings like 'Dear Customer' instead of your actual name",
      "Urgent language creating false deadlines ('Act within 24 hours')",
      "Suspicious sender addresses with slight misspellings",
      "Links that don't match the claimed destination when hovered over",
      "Unexpected attachments, especially .exe, .zip, or .scr files",
      "Requests for sensitive information like passwords or SSN",
      "Poor grammar, spelling errors, or awkward phrasing",
      "Threats of account closure or legal action",
      "Offers that seem too good to be true",
    ],
    prevention: [
      "Always verify sender through official channels before taking action",
      "Hover over links to check actual destinations before clicking",
      "Type website URLs directly instead of clicking email links",
      "Use multi-factor authentication on all important accounts",
      "Keep email security software updated and active",
      "Be skeptical of urgent requests for personal information",
      "Check for official company signatures and contact information",
      "Report suspicious emails to your email provider and the impersonated organization",
    ],
    realExamples: [
      {
        title: "Fake Bank Security Alert",
        description:
          "Email claiming suspicious activity on your account, asking you to 'verify' by clicking a link that leads to a fake banking website.",
      },
      {
        title: "Social Media Password Reset",
        description:
          "Message claiming someone tried to access your social media account, with a link to 'secure' your account that actually steals your credentials.",
      },
      {
        title: "Tax Refund Scam",
        description:
          "Official-looking email from 'IRS' claiming you're owed a refund, requesting personal information to process the payment.",
      },
      {
        title: "Package Delivery Notification",
        description:
          "Fake shipping notification claiming a package couldn't be delivered, with a malicious link to 'reschedule delivery'.",
      },
    ],
    statistics: [
      "96% of phishing attacks arrive via email",
      "1 in 4,200 emails is a phishing attempt",
      "Phishing attacks increased by 65% in the last year",
      "Average cost of a successful phishing attack: $4.65 million",
    ],
  },
  {
    id: 2,
    title: "Phone Scams",
    icon: Phone,
    color: "#10B981",
    description: "Fraudulent calls attempting to extract money or information",
    detailedDescription:
      "Phone scams have evolved significantly with technology, becoming more sophisticated and harder to detect. Scammers use caller ID spoofing to make their calls appear to come from legitimate organizations, and they employ psychological manipulation techniques to pressure victims into immediate action.",
    howItWorks: [
      "Scammers use caller ID spoofing to appear as trusted organizations",
      "They research victims through social media and public records",
      "Psychological pressure tactics create urgency and fear",
      "Victims are manipulated into providing personal information or money",
      "Some scams involve multiple calls to build trust over time",
    ],
    commonTargets: [
      "Government agencies (IRS, Social Security Administration, Medicare)",
      "Tech companies (Microsoft, Apple, Google)",
      "Banks and credit card companies",
      "Utility companies (electric, gas, water)",
      "Insurance companies",
      "Charitable organizations",
      "Law enforcement agencies",
    ],
    redFlags: [
      "Unexpected calls from unknown numbers claiming to be from known organizations",
      "High-pressure tactics demanding immediate action or payment",
      "Requests for personal information like SSN, bank details, or passwords",
      "Threats of arrest, legal action, or service disconnection",
      "Demands for payment via gift cards, wire transfers, or cryptocurrency",
      "Requests for remote access to your computer",
      "Caller refuses to provide callback number or official documentation",
      "Background noise suggesting a call center environment",
      "Caller has limited knowledge about your actual account or situation",
    ],
    prevention: [
      "Never provide personal information to unsolicited callers",
      "Hang up and call back using official numbers from company websites",
      "Use call blocking features and apps to filter suspicious numbers",
      "Register your number with the National Do Not Call Registry",
      "Verify caller identity by asking specific questions only legitimate representatives would know",
      "Be especially cautious of calls creating urgency or fear",
      "Don't trust caller ID alone - numbers can be spoofed",
      "Keep personal information private on social media to reduce targeting",
    ],
    realExamples: [
      {
        title: "Tech Support Scam",
        description:
          "Caller claims to be from Microsoft, saying your computer is infected and needs immediate fixing for a fee.",
      },
      {
        title: "IRS Impersonation",
        description:
          "Scammer poses as IRS agent threatening arrest for unpaid taxes, demanding immediate payment via gift cards.",
      },
      {
        title: "Grandparent Scam",
        description:
          "Caller pretends to be a grandchild in trouble, needing money urgently and asking not to tell parents.",
      },
      {
        title: "Utility Disconnection Threat",
        description:
          "Fake utility company representative threatens immediate service disconnection unless payment is made over the phone.",
      },
    ],
    statistics: [
      "Americans lost $29.8 billion to phone scams in 2021",
      "1 in 6 Americans has fallen victim to a phone scam",
      "Robocalls increased by 108% in recent years",
      "Average loss per phone scam victim: $502",
    ],
  },
  {
    id: 3,
    title: "Credit Card Fraud",
    icon: CreditCard,
    color: "#F59E0B",
    description: "Unauthorized use of credit card information for purchases",
    detailedDescription:
      "Credit card fraud encompasses various methods criminals use to steal and misuse credit card information. With the rise of online shopping and digital payments, fraudsters have developed increasingly sophisticated techniques to compromise card data and make unauthorized purchases.",
    howItWorks: [
      "Card skimming devices capture magnetic stripe data at ATMs and card readers",
      "Online data breaches expose card information from merchant databases",
      "Social engineering tricks victims into revealing card details",
      "Card-not-present fraud uses stolen information for online or phone purchases",
      "Account takeover involves changing account details to redirect statements and alerts",
    ],
    commonTargets: [
      "ATMs and bank card readers",
      "Gas station payment terminals",
      "Restaurant point-of-sale systems",
      "Online shopping websites",
      "Phone and mail order businesses",
      "Unsecured Wi-Fi networks",
      "Social media and phishing emails",
    ],
    redFlags: [
      "Unexpected charges appearing on your credit card statements",
      "Text messages about blocked cards with suspicious links",
      "Requests for card details over phone or email",
      "Unsecured websites (no HTTPS) asking for payment information",
      "Card readers that look tampered with or have unusual attachments",
      "Missing credit card statements or bills",
      "Denial of credit applications you didn't submit",
      "Calls about accounts you didn't open",
    ],
    prevention: [
      "Monitor your credit card statements regularly for unauthorized charges",
      "Set up account alerts for all transactions above a certain amount",
      "Use secure payment methods for online shopping (PayPal, Apple Pay)",
      "Cover your PIN when entering it in public places",
      "Check ATMs and card readers for signs of tampering before use",
      "Use credit cards instead of debit cards for better fraud protection",
      "Avoid using cards on unsecured Wi-Fi networks",
      "Report lost or stolen cards immediately to your bank",
    ],
    realExamples: [
      {
        title: "ATM Skimming Device",
        description:
          "Criminals attach small devices to ATM card slots that copy your card information when you insert your card.",
      },
      {
        title: "Online Shopping Fraud",
        description:
          "Fake e-commerce websites that look legitimate but steal your credit card information when you try to make a purchase.",
      },
      {
        title: "Restaurant Card Cloning",
        description:
          "Dishonest restaurant employees use portable skimmers to copy card data when processing your payment.",
      },
      {
        title: "Phishing for Card Details",
        description:
          "Fake emails or texts claiming your card is blocked, asking you to 'verify' by entering your card information on a fraudulent website.",
      },
    ],
    statistics: [
      "$28.58 billion lost to credit card fraud globally in 2020",
      "1 in 5 Americans has been a victim of credit card fraud",
      "Card-not-present fraud accounts for 57% of all card fraud",
      "Average fraudulent transaction amount: $62",
    ],
  },
  {
    id: 4,
    title: "Identity Theft",
    icon: User,
    color: "#8B5CF6",
    description: "Unauthorized use of personal information for financial gain",
    detailedDescription:
      "Identity theft is a serious crime where criminals steal and use your personal information without permission to commit fraud or other crimes. This can have long-lasting effects on your credit, finances, and reputation, often taking years to fully resolve.",
    howItWorks: [
      "Criminals gather personal information through various means",
      "They use this information to open new accounts or access existing ones",
      "Fraudulent activities are conducted in the victim's name",
      "Victims often don't discover the theft until significant damage is done",
      "Recovery process can be lengthy and complicated",
    ],
    commonTargets: [
      "Social Security numbers and tax information",
      "Bank account and credit card information",
      "Driver's license and state ID numbers",
      "Medical insurance information",
      "Employment and payroll information",
      "Personal details from social media",
      "Mail and financial statements",
    ],
    redFlags: [
      "Unexpected bills or collection notices for accounts you didn't open",
      "Missing mail, bank statements, or credit card bills",
      "Denial of credit applications for unknown reasons",
      "Calls from debt collectors about debts that aren't yours",
      "Suspicious activity on your credit reports",
      "Medical bills for services you didn't receive",
      "IRS notices about unreported income",
      "Employer reports of multiple W-2 forms filed in your name",
    ],
    prevention: [
      "Secure personal documents and shred sensitive papers before disposal",
      "Monitor your credit reports from all three bureaus regularly",
      "Use strong, unique passwords for all online accounts",
      "Be cautious about sharing personal information, especially online",
      "Secure your mailbox and consider a P.O. box for sensitive mail",
      "Review financial statements and medical benefits explanations carefully",
      "Limit the personal information you share on social media",
      "Use identity monitoring services for early detection",
    ],
    realExamples: [
      {
        title: "Tax Identity Theft",
        description:
          "Criminal files a fake tax return using your SSN to claim your refund before you file your legitimate return.",
      },
      {
        title: "Medical Identity Theft",
        description:
          "Someone uses your insurance information to receive medical care, potentially affecting your medical records and insurance benefits.",
      },
      {
        title: "Employment Identity Theft",
        description:
          "Criminal uses your SSN to get a job, which can affect your tax records and Social Security benefits.",
      },
      {
        title: "Account Takeover",
        description:
          "Thief gains access to your existing accounts and changes contact information to hide their activities.",
      },
    ],
    statistics: [
      "14.4 million Americans were victims of identity theft in 2018",
      "Average time to detect identity theft: 3-6 months",
      "Average cost to victims: $1,343 in out-of-pocket expenses",
      "It takes an average of 6 months to resolve identity theft cases",
    ],
  },
  {
    id: 5,
    title: "Online Shopping Scams",
    icon: Globe,
    color: "#EF4444",
    description: "Fraudulent websites and sellers stealing money or data",
    detailedDescription:
      "Online shopping scams have proliferated with the growth of e-commerce, especially during the COVID-19 pandemic. These scams range from fake websites that steal payment information to sellers who take money without delivering goods, or deliver counterfeit products.",
    howItWorks: [
      "Scammers create fake e-commerce websites that look legitimate",
      "They advertise products at prices too good to be true",
      "Payment information is stolen during the checkout process",
      "Either no product is delivered, or counterfeit/damaged goods are sent",
      "Customer service is non-existent, making refunds impossible",
    ],
    commonTargets: [
      "Popular brand knockoffs and luxury items",
      "Electronics and gadgets at steep discounts",
      "Seasonal items (holiday decorations, summer gear)",
      "Health and beauty products with miracle claims",
      "Tickets for popular events or travel",
      "Cryptocurrency and investment opportunities",
      "Emergency supplies during crises",
    ],
    redFlags: [
      "Prices significantly lower than other retailers",
      "No physical address or contact information provided",
      "Poor website design with spelling and grammar errors",
      "Only accepts wire transfers, gift cards, or cryptocurrency",
      "No customer reviews or obviously fake reviews",
      "Unsecured checkout process (no HTTPS encryption)",
      "Pressure to buy immediately with countdown timers",
      "No return policy or unrealistic guarantees",
    ],
    prevention: [
      "Research sellers and read reviews from multiple sources",
      "Check for secure payment options and HTTPS encryption",
      "Use credit cards instead of debit cards for better protection",
      "Verify the seller's physical address and contact information",
      "Be wary of deals that seem too good to be true",
      "Check the website's domain age and registration information",
      "Look for trust seals and verify their authenticity",
      "Save all transaction records and communications",
    ],
    realExamples: [
      {
        title: "Fake Designer Goods",
        description:
          "Websites selling counterfeit luxury items at 'wholesale' prices, delivering poor-quality knockoffs or nothing at all.",
      },
      {
        title: "Non-Delivery Scam",
        description:
          "Legitimate-looking online stores that take payment but never ship the ordered products.",
      },
      {
        title: "Auction Fraud",
        description:
          "Fake sellers on auction sites who collect payment but disappear without delivering the promised items.",
      },
      {
        title: "Subscription Trap",
        description:
          "Free trial offers that automatically enroll you in expensive recurring subscriptions with hidden terms.",
      },
    ],
    statistics: [
      "$4.2 billion lost to online shopping fraud in 2020",
      "Online shopping complaints increased by 245% during the pandemic",
      "1 in 4 consumers has fallen victim to online shopping fraud",
      "Average loss per victim: $311",
    ],
  },
  {
    id: 6,
    title: "Mobile App Scams",
    icon: Smartphone,
    color: "#F97316",
    description: "Malicious apps designed to steal data or money",
    detailedDescription:
      "Mobile app scams exploit the popularity of smartphones and the trust users place in app stores. These scams can range from fake apps that steal personal information to legitimate-looking apps that contain hidden malware or fraudulent subscription schemes.",
    howItWorks: [
      "Scammers create fake apps that mimic popular legitimate apps",
      "Malicious code is hidden within seemingly innocent applications",
      "Apps request excessive permissions to access personal data",
      "Some apps send premium SMS messages or make expensive calls",
      "Others steal login credentials or install additional malware",
    ],
    commonTargets: [
      "Banking and financial apps",
      "Social media and messaging apps",
      "Gaming and entertainment apps",
      "Antivirus and security apps",
      "QR code readers and utility apps",
      "Dating and social networking apps",
      "Cryptocurrency and trading apps",
    ],
    redFlags: [
      "Apps requesting permissions unrelated to their function",
      "Poor ratings, few downloads, or suspicious reviews",
      "Apps available only outside official app stores",
      "Unexpected charges appearing on your phone bill",
      "Device running slowly or battery draining quickly",
      "Pop-up ads appearing even when the app isn't running",
      "Apps asking for sensitive information unnecessarily",
      "Spelling errors or poor design quality in the app",
    ],
    prevention: [
      "Download apps only from official app stores (Google Play, Apple App Store)",
      "Read app permissions carefully before installing",
      "Check app ratings, reviews, and developer information",
      "Keep your device's operating system and apps updated",
      "Use mobile security software to scan for malware",
      "Monitor your phone bill for unexpected charges",
      "Be cautious with apps that offer deals too good to be true",
      "Regularly review and uninstall apps you no longer use",
    ],
    realExamples: [
      {
        title: "Fake Banking App",
        description:
          "Malicious apps that look like legitimate banking apps but steal login credentials when users try to sign in.",
      },
      {
        title: "Premium SMS Scam",
        description:
          "Apps that secretly send expensive text messages to premium numbers, resulting in high phone bills.",
      },
      {
        title: "Fake Antivirus App",
        description:
          "Apps claiming to protect your device but actually installing malware or demanding payment for fake threats.",
      },
      {
        title: "Cryptocurrency Wallet Scam",
        description:
          "Fake crypto wallet apps that steal users' private keys and drain their cryptocurrency holdings.",
      },
    ],
    statistics: [
      "2.2 million malicious mobile apps detected in 2021",
      "Mobile malware increased by 54% year-over-year",
      "1 in 36 mobile devices has high-risk apps installed",
      "Average cost of mobile fraud per incident: $1,800",
    ],
  },
];

const FraudTypeCard = ({
  fraud,
  onPress,
}: {
  fraud: any;
  onPress: (fraud: any) => void;
}) => {
  const IconComponent = fraud.icon;

  return (
    <TouchableOpacity style={styles.fraudCard} onPress={() => onPress(fraud)}>
      <View style={[styles.fraudIcon, { backgroundColor: fraud.color + "20" }]}>
        <IconComponent size={32} color={fraud.color} />
      </View>
      <View style={styles.fraudContent}>
        <Text style={styles.fraudTitle}>{fraud.title}</Text>
        <Text style={styles.fraudDescription}>{fraud.description}</Text>
        <View style={styles.fraudMeta}>
          <Text style={styles.metaText}>
            {fraud.statistics?.length || 0} Statistics
          </Text>
          <Text style={styles.metaText}>
            {fraud.realExamples?.length || 0} Examples
          </Text>
        </View>
      </View>
      <ExternalLink size={20} color="#94A3B8" />
    </TouchableOpacity>
  );
};

const FraudDetailModal = ({
  fraud,
  visible,
  onClose,
}: {
  fraud: any;
  visible: boolean;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!fraud) return null;

  const IconComponent = fraud.icon;

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "howit", label: "How It Works", icon: Eye },
    { id: "prevention", label: "Prevention", icon: Shield },
    { id: "examples", label: "Examples", icon: AlertTriangle },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <View>
            <Text style={styles.sectionText}>{fraud.detailedDescription}</Text>

            <View style={styles.detailSection}>
              <View style={styles.sectionHeader}>
                <AlertTriangle size={20} color="#EF4444" />
                <Text style={[styles.sectionTitle, { color: "#EF4444" }]}>
                  Red Flags
                </Text>
              </View>
              {fraud.redFlags.map((flag: any, index: any) => (
                <View key={index} style={styles.listItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.listText}>{flag}</Text>
                </View>
              ))}
            </View>

            {fraud.statistics && (
              <View style={styles.statsSection}>
                <Text style={styles.sectionTitle}>Key Statistics</Text>
                {fraud.statistics.map((stat: any, index: any) => (
                  <View key={index} style={styles.statItem}>
                    <DollarSign size={16} color="#F59E0B" />
                    <Text style={styles.statText}>{stat}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        );

      case "howit":
        return (
          <View>
            <Text style={styles.sectionText}>
              Understanding how these scams operate helps you recognize and
              avoid them:
            </Text>

            <View style={styles.detailSection}>
              <Text style={styles.sectionTitle}>How It Works</Text>
              {fraud.howItWorks.map((step: any, index: any) => (
                <View key={index} style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))}
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.sectionTitle}>Common Targets</Text>
              {fraud.commonTargets.map((target: any, index: any) => (
                <View key={index} style={styles.listItem}>
                  <View
                    style={[styles.bullet, { backgroundColor: fraud.color }]}
                  />
                  <Text style={styles.listText}>{target}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case "prevention":
        return (
          <View>
            <Text style={styles.sectionText}>
              Follow these best practices to protect yourself:
            </Text>

            <View style={styles.detailSection}>
              <View style={styles.sectionHeader}>
                <Shield size={20} color="#10B981" />
                <Text style={[styles.sectionTitle, { color: "#10B981" }]}>
                  Prevention Tips
                </Text>
              </View>
              {fraud.prevention.map((tip: any, index: any) => (
                <View key={index} style={styles.listItem}>
                  <CheckCircle size={16} color="#10B981" />
                  <Text style={styles.listText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case "examples":
        return (
          <View>
            <Text style={styles.sectionText}>
              Real-world examples to help you recognize these scams:
            </Text>

            {fraud.realExamples.map((example: any, index: any) => (
              <View key={index} style={styles.exampleCard}>
                <Text style={styles.exampleTitle}>{example.title}</Text>
                <Text style={styles.exampleDescription}>
                  {example.description}
                </Text>
              </View>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <View style={styles.modalTitleContainer}>
            <View
              style={[
                styles.modalIcon,
                { backgroundColor: fraud.color + "20" },
              ]}
            >
              <IconComponent size={28} color={fraud.color} />
            </View>
            <Text style={styles.modalTitle}>{fraud.title}</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#64748B" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabScrollContent}
          >
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.tab,
                    activeTab === tab.id && {
                      backgroundColor: fraud.color + "20",
                      borderColor: fraud.color,
                    },
                  ]}
                  onPress={() => setActiveTab(tab.id)}
                >
                  <TabIcon
                    size={16}
                    color={activeTab === tab.id ? fraud.color : "#64748B"}
                  />
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tab.id && {
                        color: fraud.color,
                        fontWeight: "600",
                      },
                    ]}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <ScrollView
          style={styles.modalContent}
          showsVerticalScrollIndicator={false}
        >
          {renderTabContent()}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default function KnowledgeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFraud, setSelectedFraud] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const filteredFrauds = fraudTypes.filter(
    (fraud) =>
      fraud.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fraud.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFraudPress = (fraud: any) => {
    setSelectedFraud(fraud);
    setShowDetailModal(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Fraud Types</Text>
      <View style={styles.fraudList}>
        {filteredFrauds.map((fraud) => (
          <FraudTypeCard
            key={fraud.id}
            fraud={fraud}
            onPress={handleFraudPress}
          />
        ))}
      </View>

      <View style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>🚨 Report Fraud Immediately</Text>
        <Text style={styles.emergencyText}>
          If you've been a victim of fraud or suspect fraudulent activity,
          report it immediately through these official channels:
        </Text>
        <View style={styles.emergencyContacts}>
          <View style={styles.contactItem}>
            <Phone size={16} color="#EF4444" />
            <Text style={styles.emergencyContact}>
              Cyber Crime Helpline: 1930
            </Text>
          </View>
          <View style={styles.contactItem}>
            <Globe size={16} color="#EF4444" />
            <Text style={styles.emergencyContact}>cybercrime.gov.in</Text>
          </View>
          <View style={styles.contactItem}>
            <Mail size={16} color="#EF4444" />
            <Text style={styles.emergencyContact}>
              report.phishing@rbi.org.in
            </Text>
          </View>
        </View>
      </View>

      <FraudDetailModal
        fraud={selectedFraud}
        visible={showDetailModal}
        onClose={() => setShowDetailModal(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    lineHeight: 24,
  },
  searchContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 8,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#0F172A",
  },
  statsCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 20,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: "#EF4444",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#64748B",
    textAlign: "center",
    fontWeight: "500",
  },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '700',
  //   color: '#0F172A',
  //   paddingHorizontal: 24,
  //   marginBottom: 16,
  // },
  fraudList: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  fraudCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  fraudIcon: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  fraudContent: {
    flex: 1,
  },
  fraudTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
  },
  fraudDescription: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 8,
    lineHeight: 20,
  },
  fraudMeta: {
    flexDirection: "row",
    gap: 16,
  },
  metaText: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  modalTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  modalIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  closeButton: {
    padding: 8,
  },
  tabContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  tabScrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
    gap: 8,
  },
  tabText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  modalContent: {
    flex: 1,
    padding: 24,
  },
  sectionText: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24,
    marginBottom: 24,
  },
  detailSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginLeft: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EF4444",
    marginTop: 8,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3B82F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: "#334155",
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  statText: {
    fontSize: 14,
    color: "#334155",
    marginLeft: 8,
    flex: 1,
  },
  exampleCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#EF4444",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },
  exampleDescription: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
  resourcesSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  resourceCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
  },
  resourceDescription: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 8,
    lineHeight: 20,
  },
  resourceCategory: {
    alignSelf: "flex-start",
  },
  categoryText: {
    fontSize: 12,
    color: "#3B82F6",
    fontWeight: "600",
    backgroundColor: "#3B82F620",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  emergencyCard: {
    backgroundColor: "#FEF2F2",
    marginHorizontal: 24,
    marginBottom: 32,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  emergencyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#DC2626",
    marginBottom: 12,
  },
  emergencyText: {
    fontSize: 14,
    color: "#7F1D1D",
    marginBottom: 16,
    lineHeight: 20,
  },
  emergencyContacts: {
    gap: 8,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  emergencyContact: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7F1D1D",
  },
});
