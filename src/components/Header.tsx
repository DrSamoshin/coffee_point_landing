import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

// Floating block with two buttons in the top-right corner
export default function Header() {
  return (
    <div style={{
      position: 'fixed',
      top: 'clamp(8px, 2vw, 16px)', // 8px на мобильных, 16px на десктопе
      right: 'clamp(8px, 2vw, 16px)',
      zIndex: 50
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(8px, 2vw, 16px)', // Меньший отступ на мобильных
        flexDirection: 'row',
        flexWrap: 'wrap' // Перенос на новую строку при необходимости
      }}>
        <LanguageSwitcher />
        <Button 
          labelKey="ui.buttons.sign_in" 
          color="#FFFFFF" 
          href="https://coffee-point-crm.web.app/" 
        />
      </div>
    </div>
  );
}
