export interface ConstConfigs {
  icon: string;
  tokenValley: string;
}

export function useConst(): ConstConfigs {
  return {
    icon: "/icon.svg",
    tokenValley: "/tokenvalley.svg",
  };
}
