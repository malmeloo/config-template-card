import { LovelaceCardConfig, EntitiesCardEntityConfig, LovelaceElementConfigBase } from 'custom-card-helpers';

export interface ConfigTemplateConfig {
  type: string;
  entities: string[];
  variables?: string[] | { [key: string]: string };
  async?: boolean;
  card?: LovelaceCardConfig;
  row?: EntitiesCardEntityConfig;
  element?: LovelaceElementConfigBase;
  style?: Record<string, string>;
}
