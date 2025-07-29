import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  User,
  Trophy,
  Flag,
  BookOpen,
  Brain,
  Award,
  Bell,
  Globe,
  HelpCircle,
  Info,
  LogOut,
  Shield,
  GraduationCap,
} from "lucide-react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Container } from "../../components/ui/Container";
import { Typography } from "../../components/ui/Typography";
import { Surface } from "../../components/ui/Surface";
import { Spacing } from "../../components/ui/Spacing";
import { IconButton } from "../../components/ui/IconButton";

const ProfileScreen = () => {
  const { theme } = useTheme();

  const userStats = {
    schemesExposed: 12,
    redFlagsSpotted: 45,
    storiesCompleted: 8,
    badgesEarned: 6,
    currentLevel: "Financial Detective",
    experiencePoints: 2450,
    nextLevelXP: 3000,
  };

  const badges = [
    { name: "Red Flag Spotter", icon: Flag, color: "#ff6b6b", earned: true },
    { name: "Collapse Survivor", icon: Shield, color: "#4ecdc4", earned: true },
    { name: "Financial Detective", icon: "🔍", color: "#45b7d1", earned: true },
    { name: "Story Master", icon: BookOpen, color: "#96ceb4", earned: true },
    { name: "Scheme Buster", icon: "⚖️", color: "#ffd93d", earned: true },
    { name: "Fraud Fighter", icon: "🛡️", color: "#ff9ff3", earned: true },
    { name: "Awareness Champion", icon: "📢", color: "#54a0ff", earned: false },
    {
      name: "Master Educator",
      icon: GraduationCap,
      color: "#5f27cd",
      earned: false,
    },
  ];

  const achievements = [
    {
      title: "First Simulation",
      description: "Completed your first Ponzi scheme simulation",
      date: "2024-01-15",
    },
    {
      title: "Red Flag Expert",
      description: "Spotted 50 red flags in the detection game",
      date: "2024-01-20",
    },
    {
      title: "Story Enthusiast",
      description: "Completed 10 story mode scenarios",
      date: "2024-01-25",
    },
  ];

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => {}, style: "destructive" },
    ]);
  };

  const progressPercentage =
    (userStats.experiencePoints / userStats.nextLevelXP) * 100;

  return (
    <Container variant="gradient" padding="none">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={[styles.header, { paddingHorizontal: theme.spacing.md }]}>
            <Surface variant="elevated" radius="xl" padding="lg" style={styles.avatarContainer}>
                <User size={40} color="white" />
            </Surface>
            <Spacing size="md" />
            <Typography variant="h2" weight="bold" align="center">
              Fraud Fighter
            </Typography>
            <Typography variant="subtitle" color="accent" align="center">
              {userStats.currentLevel}
            </Typography>
          </View>

          <Spacing size="xl" />

          {/* Progress Section */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Progress
            </Typography>
            <Spacing size="md" />
            <Surface variant="elevated" padding="lg" radius="lg">
              <View style={styles.progressHeader}>
                <Typography variant="subtitle" weight="semibold">
                  {userStats.experiencePoints} / {userStats.nextLevelXP} XP
                </Typography>
                <Typography variant="subtitle" weight="bold" color="accent">
                  {Math.round(progressPercentage)}%
                </Typography>
              </View>
              <Spacing size="sm" />
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { 
                    width: `${progressPercentage}%`,
                    backgroundColor: theme.colors.primary 
                  }]}
                />
              </View>
              <Spacing size="sm" />
              <Typography variant="caption" color="secondary" align="center">
                {userStats.nextLevelXP - userStats.experiencePoints} XP to next
                level
              </Typography>
            </Surface>
          </View>

          <Spacing size="xl" />

          {/* Stats Section */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Your Stats
            </Typography>
            <Spacing size="md" />
            <View style={styles.statsGrid}>
              <Surface variant="elevated" padding="md" radius="lg" style={styles.statCard}>
                <Brain size={24} color="#ff6b6b" />
                <Spacing size="sm" />
                <Typography variant="h3" weight="bold" align="center">
                  {userStats.schemesExposed}
                </Typography>
                <Typography variant="caption" color="secondary" align="center">
                  Schemes Exposed
                </Typography>
              </Surface>
              <Surface variant="elevated" padding="md" radius="lg" style={styles.statCard}>
                <Flag size={24} color="#4ecdc4" />
                <Spacing size="sm" />
                <Typography variant="h3" weight="bold" align="center">
                  {userStats.redFlagsSpotted}
                </Typography>
                <Typography variant="caption" color="secondary" align="center">
                  Red Flags Spotted
                </Typography>
              </Surface>
              <Surface variant="elevated" padding="md" radius="lg" style={styles.statCard}>
                <BookOpen size={24} color="#45b7d1" />
                <Spacing size="sm" />
                <Typography variant="h3" weight="bold" align="center">
                  {userStats.storiesCompleted}
                </Typography>
                <Typography variant="caption" color="secondary" align="center">
                  Stories Completed
                </Typography>
              </Surface>
              <Surface variant="elevated" padding="md" radius="lg" style={styles.statCard}>
                <Trophy size={24} color="#ffd93d" />
                <Spacing size="sm" />
                <Typography variant="h3" weight="bold" align="center">
                  {userStats.badgesEarned}
                </Typography>
                <Typography variant="caption" color="secondary" align="center">
                  Badges Earned
                </Typography>
              </Surface>
            </View>
          </View>

          <Spacing size="xl" />

          {/* Badges Section */}
          <View style={styles.badgesContainer}>
            <Text style={styles.sectionTitle}>Badges Collection</Text>
            <View style={styles.badgesGrid}>
              {badges.map((badge, index) => (
                <View
                  key={index}
                  style={[
                    styles.badgeCard,
                    !badge.earned && styles.badgeCardLocked,
                  ]}
                >
                  {typeof badge.icon === "string" ? (
                    <Text
                      style={[
                        styles.badgeIconText,
                        { color: badge.earned ? badge.color : "#666" },
                      ]}
                    >
                      {badge.icon}
                    </Text>
                  ) : (
                    <badge.icon
                      size={24}
                      color={badge.earned ? badge.color : "#666"}
                    />
                  )}
                  <Text
                    style={[
                      styles.badgeName,
                      !badge.earned && styles.badgeNameLocked,
                    ]}
                  >
                    {badge.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Recent Achievements */}
          <View style={styles.achievementsContainer}>
            <Text style={styles.sectionTitle}>Recent Achievements</Text>
            {achievements.map((achievement, index) => (
              <View key={index} style={styles.achievementCard}>
                <Trophy size={24} color="#ffd93d" />
                <View style={styles.achievementContent}>
                  <Text style={styles.achievementTitle}>
                    {achievement.title}
                  </Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                  <Text style={styles.achievementDate}>{achievement.date}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Settings Section */}
          <View style={{ paddingHorizontal: theme.spacing.md }}>
            <Typography variant="h4" weight="semibold">
              Settings
            </Typography>
            <Spacing size="md" />

            <Surface variant="elevated" padding="none" radius="lg" style={{ marginBottom: theme.spacing.sm }}>
              <TouchableOpacity style={styles.settingItem}>
                <Bell size={24} color="#4ecdc4" />
                <Typography variant="body" weight="medium" style={{ flex: 1, marginLeft: theme.spacing.md }}>
                  Notifications
                </Typography>
                <Typography variant="h4" color="secondary">›</Typography>
              </TouchableOpacity>
            </Surface>

            <Surface variant="elevated" padding="none" radius="lg" style={{ marginBottom: theme.spacing.sm }}>
              <TouchableOpacity style={styles.settingItem}>
                <Globe size={24} color="#45b7d1" />
                <Typography variant="body" weight="medium" style={{ flex: 1, marginLeft: theme.spacing.md }}>
                  Language
                </Typography>
                <Typography variant="h4" color="secondary">›</Typography>
              </TouchableOpacity>
            </Surface>

            <Surface variant="elevated" padding="none" radius="lg" style={{ marginBottom: theme.spacing.sm }}>
              <TouchableOpacity style={styles.settingItem}>
                <HelpCircle size={24} color="#96ceb4" />
                <Typography variant="body" weight="medium" style={{ flex: 1, marginLeft: theme.spacing.md }}>
                  Help & Support
                </Typography>
                <Typography variant="h4" color="secondary">›</Typography>
              </TouchableOpacity>
            </Surface>

            <Surface variant="elevated" padding="none" radius="lg" style={{ marginBottom: theme.spacing.sm }}>
              <TouchableOpacity style={styles.settingItem}>
                <Info size={24} color="#ffd93d" />
                <Typography variant="body" weight="medium" style={{ flex: 1, marginLeft: theme.spacing.md }}>
                  About
                </Typography>
                <Typography variant="h4" color="secondary">›</Typography>
              </TouchableOpacity>
            </Surface>

            <Surface variant="elevated" padding="none" radius="lg">
              <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
                <LogOut size={24} color="#ff6b6b" />
                <Typography variant="body" weight="medium" style={{ flex: 1, marginLeft: theme.spacing.md, color: "#ff6b6b" }}>
                  Logout
                </Typography>
              </TouchableOpacity>
            </Surface>
          </View>

          <Spacing size="xl" />
        </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 30,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6b6b",
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  statCard: {
    width: "48%",
    alignItems: "center",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
});

export default ProfileScreen;

              <Bell size={24} color="#4ecdc4" />
              <Text style={styles.settingText}>Notifications</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <Globe size={24} color="#45b7d1" />
              <Text style={styles.settingText}>Language</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <HelpCircle size={24} color="#96ceb4" />
              <Text style={styles.settingText}>Help & Support</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <Info size={24} color="#ffd93d" />
              <Text style={styles.settingText}>About</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.settingItem, styles.logoutItem]}
              onPress={handleLogout}
            >
              <LogOut size={24} color="#ff6b6b" />
              <Text style={[styles.settingText, styles.logoutText]}>
                Logout
              </Text>
            </TouchableOpacity>
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
    alignItems: "center",
    paddingVertical: 30,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  userLevel: {
    fontSize: 16,
    color: "#4ecdc4",
    fontWeight: "600",
  },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  progressCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 20,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  progressPercentage: {
    fontSize: 16,
    color: "#4ecdc4",
    fontWeight: "bold",
  },
  progressBar: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
    marginBottom: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4ecdc4",
    borderRadius: 4,
  },
  progressLabel: {
    fontSize: 14,
    color: "#b8b8b8",
    textAlign: "center",
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
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
  badgesContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeCard: {
    width: "48%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  badgeCardLocked: {
    opacity: 0.5,
  },
  badgeIconText: {
    fontSize: 24,
  },
  badgeName: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    marginTop: 8,
    fontWeight: "600",
  },
  badgeNameLocked: {
    color: "#666",
  },
  achievementsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  achievementCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  achievementContent: {
    flex: 1,
    marginLeft: 15,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: "#b8b8b8",
    lineHeight: 18,
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 12,
    color: "#666",
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  settingItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: "white",
    marginLeft: 15,
    fontWeight: "500",
  },
  chevron: {
    fontSize: 24,
    color: "#b8b8b8",
  },
  logoutItem: {
    marginTop: 10,
  },
  logoutText: {
    color: "#ff6b6b",
  },
});

export default ProfileScreen;
