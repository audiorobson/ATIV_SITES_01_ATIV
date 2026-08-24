export const foundationChecks = [
  "Conteúdo principal presente no HTML renderizado",
  "Hierarquia semântica com um único H1",
  "Navegação por teclado com atalho para o conteúdo",
  "TypeScript em modo strict",
  "Build de produção reproduzível",
] as const;

export function hasUniqueFoundationChecks(checks: readonly string[]): boolean {
  return new Set(checks).size === checks.length;
}
