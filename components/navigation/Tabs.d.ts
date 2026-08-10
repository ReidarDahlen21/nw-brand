export interface TabsProps {
  tabs?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  onDark?: boolean;
}
export function Tabs(props: TabsProps): JSX.Element;
