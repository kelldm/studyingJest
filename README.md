# Vamos testar?
 Documentando estudos realizados com base no curso da Alura de Jest! 
 Nota: foi utilizando react testing-library
##Teste 1

<strong> OBJETIVOS </strong>
- Encontrar no DOM o input
- Encontrar o botão
- Garantir que o input estaja no documento
- Garantir que o botão esteja desabilitado

### FALHA - Teste 1
O arquivo de formulário não pode ser encontrado... "Aonde está ele?", vamos implementar o componente e consertar isso :) </br>

![image](https://user-images.githubusercontent.com/83349744/200121822-e6141a2c-4fec-4991-ab4d-d7af9516408a.png)

</br> Agora sim! Além de implementar o formulário, nós forçamos o botão a estar desabilitado.

![image](https://user-images.githubusercontent.com/83349744/200123006-8fbf68ba-9ca1-4392-906b-315b49319980.png)

----------------

### Evoluindo Formulário


Após implementar o cabeçalho e gerenciar estados e rotas, começamos a evoluir nosso formulário. Criaremos um hook costumizado utilizando a lógica de recoil. Agora não está atrelada a um componente diretamente.</br>

![image](https://user-images.githubusercontent.com/83349744/200397796-94527b7c-c819-44ef-93dc-e278f23f1d44.png)
</br>

![image](https://user-images.githubusercontent.com/83349744/200397851-09cd8c9b-89a0-4d7f-9734-30c4de2ea029.png)


É importante lembrar que o react testing-library quer testar comportamento, não a implementação.
