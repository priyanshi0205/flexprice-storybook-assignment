export const QUERY_PRESETS = {
  REALTIME: { staleTime: 0, gcTime: 0 },
  DEFAULT: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 },
  STATIC: { staleTime: 30 * 60 * 1000, gcTime: 60 * 60 * 1000 },
};

export function createQueryConfig(overrides = {}) {
  return {
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...overrides,
  };
}