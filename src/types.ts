export type ModelMode = 'core' | 'monolith' | 'lattice';

export type SpectrumTheme = 'cyan' | 'violet' | 'emerald';

export interface ThemeConfig {
  primary: string;
  glow: string;
  emissive: string;
  accent: string;
  name: string;
}

export const THEMES: Record<SpectrumTheme, ThemeConfig> = {
  cyan: {
    primary: '#00f2fe',
    glow: 'rgba(0, 242, 254, 0.4)',
    emissive: '#0083fe',
    accent: '#4facfe',
    name: 'Electric Cyan'
  },
  violet: {
    primary: '#b5179e',
    glow: 'rgba(181, 23, 158, 0.45)',
    emissive: '#7209b7',
    accent: '#f72585',
    name: 'Hyper Violet'
  },
  emerald: {
    primary: '#00ff87',
    glow: 'rgba(0, 255, 135, 0.45)',
    emissive: '#00bd56',
    accent: '#60efff',
    name: 'Toxic Emerald'
  }
};

