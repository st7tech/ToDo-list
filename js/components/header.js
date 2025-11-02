export function addHeader(styleAdd) {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  const mainTitle = document.createElement("h1");

  header.classList.add("header");
  headerContainer.classList.add("container", "header__container");
  mainTitle.classList.add("main-header");

  mainTitle.innerText = "TODO LIST";

  // Style
  styleAdd.innerHTML += `
		.header {
			margin-bottom: 23px;
		}	

		.container {
			position: relative;
			max-width: 780px;
			padding: 0 15px;
			margin: 0 auto;
		}

		.header__container {
			padding-top: 48px;

			text-align: center;
		}	

		.main-header {
			font-weight: 500;
			font-size: 26px;
			line-height: 100%;
		}
	`;

  // Add DOM tree
  app.insertAdjacentElement("afterbegin", header);
  header.insertAdjacentElement("afterbegin", headerContainer);
  headerContainer.insertAdjacentElement("afterbegin", mainTitle);
}
