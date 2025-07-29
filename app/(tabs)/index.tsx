import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import {
  Brain,
  Flag,
  BookOpen,
  GraduationCap,
  Eye,
  Shield,
  TrendingUp,
} from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import { Container } from "../../components/ui/Container";
import { Typography } from "../../components/ui/Typography";
import { Surface } from "../../components/ui/Surface";
import { Spacing } from "../../components/ui/Spacing";
import { IconButton } from "../../components/ui/IconButton";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const features = [
    {
      id: 1,
      title: "Ponzi Simulator",
      description: "Experience how Ponzi schemes work from the inside",
      icon: Brain,
      color: "#ff6b6b",
      route: "/pages/PonziSimulator",
    },
    {
      id: 2,
      title: "Red Flag Game",
      description: "Test your ability to spot fraud indicators",
      icon: Flag,
      color: "#4ecdc4",
      route: "/pages/redflags",
    },
    {
      id: 3,
      title: "Story Mode",
      description: "Learn through real-world case studies",
      icon: BookOpen,
      color: "#45b7d1",
      route: "/pages/story",
    },
    {
      id: 4,
      title: "Education Center",
      description: "Comprehensive fraud awareness resources",
      icon: GraduationCap,
      color: "#96ceb4",
      route: "/(tabs)/education",
    },
  ];

  const stats = [
    { label: "Schemes Exposed", value: "50+", icon: Eye },
    { label: "Users Protected", value: "10K+", icon: Shield },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
  ];

  return (
    <Container variant="gradient" padding="none">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={[styles.header, { paddingHorizontal: theme.spacing.md }]}>
            <View>
              <Typography variant="h2" weight="bold">
                Welcome back!
              </Typography>
              <Spacing size="xs" />
              <Typography variant="body" color="secondary">
                Ready to expose some fraud?
              </Typography>
            </View>
            <IconButton variant="ghost" onPress={toggleTheme}>
              <ThemeToggle />
            </IconButton>
          </View>

          <Spacing size="lg" />

          {/* Stats Section */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Impact Statistics
            </Typography>
            <Spacing size="md" />
            <View style={styles.statsRow}>
              {stats.map((stat, index) => (
                <Surface
                  key={index}
                  variant="elevated"
                  padding="md"
                  radius="lg"
                  style={styles.statCard}
                >
                  <stat.icon size={24} color="#4ecdc4" />
                  <Spacing size="sm" />
                  <Typography variant="h3" weight="bold" align="center">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" color="secondary" align="center">
                    {stat.label}
                  </Typography>
                </Surface>
              ))}
            </View>
          </View>

          <Spacing size="xl" />

          {/* Features Grid */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Explore Features
            </Typography>
            <Spacing size="md" />
            <View style={styles.featuresGrid}>
              {features.map((feature) => (
                <TouchableOpacity
                  key={feature.id}
                  style={[styles.featureCard, theme.shadows.md]}
                  onPress={() => router.push(feature.route as any)}
                  activeOpacity={0.8}
                >
                  <Surface
                    variant="elevated"
                    padding="lg"
                    radius="xl"
                    style={[styles.featureContent, { backgroundColor: feature.color }]}
                  >
                    <feature.icon size={32} color="white" />
                    <Spacing size="md" />
                    <Typography variant="subtitle" weight="bold" style={{ color: "white" }} align="center">
                      {feature.title}
                    </Typography>
                    <Spacing size="sm" />
                    <Typography variant="caption" style={{ color: "rgba(255, 255, 255, 0.8)" }} align="center">
                      {feature.description}
                    </Typography>
                  </Surface>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Spacing size="xl" />

          {/* Quick Tips */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Daily Tip
            </Typography>
            <Spacing size="md" />
            <Surface variant="elevated" padding="lg" radius="lg">
              <View style={styles.tipContent}>
                <Typography variant="h4">💡</Typography>
                <Spacing horizontal size="md" />
                <View style={{ flex: 1 }}>
                  <Typography variant="subtitle" weight="semibold">
                    Red Flag Alert!
                  </Typography>
                  <Spacing size="sm" />
                  <Typography variant="body" color="secondary">
                    If someone promises "guaranteed returns" with no risk, it's
                    likely a scam. Real investments always carry some level of
                    risk.
                  </Typography>
                </View>
              </View>
            </Surface>
          </View>

          <Spacing size="xl" />
        </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  featureCard: {
    width: (width - 50) / 2,
    borderRadius: 20,
    overflow: "hidden",
  },
  featureContent: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 160,
  },
  tipContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default HomeScreen;

                  Red Flag Alert!
                </Text>
                <Text
                  style={[
                    styles.tipText,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  If someone promises "guaranteed returns" with no risk, it's
                  likely a scam. Real investments always carry some level of
                  risk.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#b8b8b8",
    marginTop: 4,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.11)",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginHorizontal: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#b8b8b8",
    textAlign: "center",
    marginTop: 4,
  },
  featuresContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: (width - 50) / 2,
    height: 160,
    marginBottom: 15,
    borderRadius: 16,
    overflow: "hidden",
  },
  featureGradient: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 12,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 16,
  },
  tipsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tipCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  tipIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: "#b8b8b8",
    lineHeight: 20,
  },
});

export default HomeScreen;
