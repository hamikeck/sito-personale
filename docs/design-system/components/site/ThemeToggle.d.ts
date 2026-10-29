/** Pulsante tondo 32px luna/sole che commuta .dark. */
export interface ThemeToggleProps {
  /** elemento su cui commutare .dark (default document.documentElement) */
  target?: HTMLElement;
  onChange?: (dark: boolean) => void;
}
export declare function ThemeToggle(props: ThemeToggleProps): JSX.Element;
