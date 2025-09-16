import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Floating block with two buttons in the top-right corner
export default function Header() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <Button labelKey="ui.buttons.sign_in" color="#FFFFFF" href="https://coffee-point-crm.web.app/" />
      </div>
    </div>
  );
}
