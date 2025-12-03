export function getWelcomeMessage(name?: string): string {
    if (name && name.trim().length > 0) {
      return `Bem-vindo, ${name}!`;
    }
  
    return 'Bem-vindo à aplicação!';
  }
  