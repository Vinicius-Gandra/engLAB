# Segurança

## Relatar uma vulnerabilidade

Use **Security and quality → Report a vulnerability** neste repositório para
enviar um relato privado ao mantenedor. Não publique senhas, tokens, dados de
projetos ou instruções de exploração em issues ou comentários públicos.

Inclua o endereço afetado, a data, o comportamento observado e uma descrição
mínima que permita reproduzir o problema sem causar danos.

## Publicação do site

Este repositório é público e contém o site, suas configurações e verificações.
Os motores privados de cálculo, verificadores de credenciais e chaves de
assinatura devem permanecer fora dele. Alterações entram por pull request e
passam pelas verificações de publicação e pela análise de código.

Execute antes de enviar mudanças:

```sh
python3 -m unittest discover -s tests/security -v
python3 scripts/security/check_publication.py
```

A verificação específica procura arquivos de servidor, credenciais e o formato
conhecido do verificador antigo. Ela complementa o secret scanning do GitHub;
não substitui revisão de código nem verifica toda forma possível de segredo.
O controle de acesso aos cálculos e aos relatórios deve ser aplicado no servidor.

Se um segredo for publicado, revogue ou substitua o material afetado primeiro.
Remover o arquivo da versão atual não o remove do histórico, de forks ou de
cópias anteriores. A limpeza do histórico requer coordenação com os mantenedores.
