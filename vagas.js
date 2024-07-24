let vagas =  [
    {
      nome: "Estágio em TI - Suporte Técnico",
      endereco: "Dell Technologies",
      link: "https://www.linkedin.com/jobs/view/3980879296/?alternateChannel=search&refId=wS4WPQStU4K5ptnvbsEQYQ%3D%3D&trackingId=3wte%2BNXFPrp9JllRXT2NRQ%3D%3D",
      telefone: "@dellnobrasil",
      thumbnail: "https://m.media-amazon.com/images/I/71Z6zYMvZZL.jpg"
    },
    {
      nome: "Data Science Intern - Digital and Transformation Office",
      endereco: "HP",
      link: "https://hp.wd5.myworkdayjobs.com/ExternalCareerSite/job/Porto-Alegre-Rio-Grande-do-Sul-Brazil/Data-Science-Intern---Digital-and-Transformation-Office_3139272-2?source=Socialmedia-LinkedIn&src=Linkedin+Full+Feed",
      telefone: "@hpbrasil",
      thumbnail: "https://s2-g1.glbimg.com/JTb7QfxAN4y4pR--WxJfOsLieBQ=/0x0:640x426/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/T/T/a1TLpyQRK8IAU9tYwPVQ/hp.jpg"
    },
    {
      nome: "Processo Seletivo 2024.2 - Estágio em desenvolvimento Fullstack",
      endereco: "EloGroup",
      link: "https://elogroup.gupy.io/job/eyJqb2JJZCI6NzQ1MjgyMywic291cmNlIjoibGlua2VkaW4ifQ==?jobBoardSource=linkedin",
      telefone: "@ojeitoelogroup",
      thumbnail: "https://images.sympla.com.br/5c6db47a05cf6.png"
    }    
  ]

document.addEventListener('DOMContentLoaded', function () {
  // Carregar a lista de clientes ao carregar a página
  loadVagasList();

  // Adicionar um ouvinte de evento ao formulário para adicionar clientes
  document.getElementById('formAdicionarVagas').addEventListener('submit', function (event) {
      event.preventDefault();
      adicionarVaga();
  });
});

function adicionarVaga() {
  const nome = document.getElementById('nomeVaga').value;
  const endereco = document.getElementById('enderecoVaga').value;
  const link = document.getElementById('linkVaga').value;
  const telefone = document.getElementById('telefoneVaga').value;

  vagas.push({
      nome: nome,
      endereco: endereco,
      link: link,
      telefone: telefone,
      thumbnail: "" // Adicione um campo de miniatura vazio ou um padrão
  });

  loadVagasList(); // Recarregar a lista após adicionar uma vaga
}

function loadVagasList() {
  displayVagasList(vagas);
}

function displayVagasList(data) {
  const vagaContainer = document.getElementById('vagaContainer');
  vagaContainer.innerHTML = '';

  for (let i = 0; i < data.length; i += 3) {
      const vagaRow = document.createElement('div');
      vagaRow.classList.add('vaga-row');

      for (let j = i; j < i + 3 && j < data.length; j++) {
          const vaga = data[j];
          const vagaItem = document.createElement('div');
          vagaItem.classList.add('vaga-item');

          const vagaImage = document.createElement('img');
          vagaImage.src = vaga.thumbnail;  // Certifique-se de que cada objeto "vaga" tenha uma propriedade "thumbnail" com a URL da imagem.
          vagaImage.alt = `Imagem de ${vaga.nome}`;

          const vagaTitle = document.createElement('h3');
          vagaTitle.textContent = vaga.nome;

          const vagaAddress = document.createElement('p');
          vagaAddress.textContent = `Endereço: ${vaga.endereco}`;

          const vagaLink = document.createElement('p');
          const vagaAnchor = document.createElement('a');
          vagaAnchor.href = vaga.link;
          vagaAnchor.textContent = 'Link para a vaga';
          vagaAnchor.target = '_blank';  // Abre o link em uma nova aba
          vagaLink.appendChild(vagaAnchor);

          const vagaPhone = document.createElement('p');
          vagaPhone.textContent = `${vaga.telefone}`;

          vagaItem.appendChild(vagaImage);
          vagaItem.appendChild(vagaTitle);
          vagaItem.appendChild(vagaAddress);
          vagaItem.appendChild(vagaLink);
          vagaItem.appendChild(vagaPhone);

          vagaRow.appendChild(vagaItem);
      }

      vagaContainer.appendChild(vagaRow);
  }
}
