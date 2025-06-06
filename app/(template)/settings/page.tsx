import ContentSection from "@/components/settings/components/content-section";
import ProfileForm from "@/components/settings/components/profile-form";

export default function SettingsProfile() {
  return (
    <ContentSection
      title="Profile"
      desc="This is how others will see you on the site."
    >
      <ProfileForm />
    </ContentSection>
  );
}
