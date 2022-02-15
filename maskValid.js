/*
Autor: Paulo Lima
GitHub: https://github.com/Paulolima2008
Data Criação: 10/02/2022
Data Modificação: 13/02/2022

Validação e Máscara JS 

*Padrão1 - A função que começar com a letra (M) se refere a máscara
*Padrão2 - A função que começar com a letra (V) se refere a validação

*Tópicos
1 - Máscaras
2 - Validação
3 - Eventos
 */
 //-------------------------------------------------------------------------------
function modificador(o, f) {
	v_obj = o
	v_fun = f
	setTimeout("execModificador()", 1)
}
//-------------------------------------------------------------------------------
function execModificador() {
	v_obj.value = v_fun(v_obj.value)
}
//1 - Máscaras
//-------------------------------------------------------------------------------
function mTel(v) {
	v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
	v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}
function mCep(v) {
	v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito númerico
	v = v.replace(/(\d)(\d{3})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
	return v;
}
function mPlaca(v) {

	v = v.replace(/\W/g, ""); //Remove tudo o que não é dígito númerico e alfanúmerico
	v = v.replace(/([A-Za-z]{3})([0-9])([0-9a-zA-Z])([0-9]{2})/g, "$1-$2$3$4");

	return v.toUpperCase();
}
function mNumerico(v) {

	v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito númerico

	return v;
}
function mCpfCnpj(v) {
	var qtd = v.length;

	if (qtd == 11) {

		v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito númerico
		v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"); //Coloca hífen e ponto na validação cpf
	}
	else {

		v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito númerico
		v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5"); //Coloca hífen e ponto na validação cnpf
	}

	return v;
}
function mMonetario(v) {
	v = v.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	return v;
}
//2 - Validação
//-------------------------------------------------------------------------------
function vCpfCnpj(v) {
	if (!validarCpfCnpj(v)) { // receber o retorno da função
		alert("CPF ou CNPJ inválidos, Insira um CPF/CNPJ válido!");
		v = v.value = '';
	}
	return v;
}
function vCaracteres(v) {
	var regex = /[a-zA-Záãâéêíîóôõú\s]+$/g;

	if (!v.match(regex)) {
		alert("Esse Campo aceita apenas letras e espaço!");
		v = v.replace(/\d/g, "");
	}

	return v;
}
function vPlaca(v) {

	var regex = /([A-Za-z]{3})[-]([0-9])([0-9a-zA-Z])([0-9]{2})/g;

	if (!v.match(regex)) {
		alert("Placa Inválida, Tente Novamente no formato AAA-9A99 ou AAA-9999");
		v = v.value = '';
	}

	return v;
}
function validarCpfCnpj(v) {
	if (v.length == 14) {
		var cpf = v.trim();

		cpf = cpf.replace(/\./g, '');
		cpf = cpf.replace('-', '');
		cpf = cpf.split('');

		var v1 = 0;
		var v2 = 0;
		var aux = false;

		for (var i = 1; cpf.length > i; i++) {
			if (cpf[i - 1] != cpf[i]) {
				aux = true;
			}
		}

		if (aux == false) {
			return false;
		}

		for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
			v1 += cpf[i] * p;
		}

		v1 = ((v1 * 10) % 11);

		if (v1 == 10) {
			v1 = 0;
		}

		if (v1 != cpf[9]) {
			return false;
		}

		for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
			v2 += cpf[i] * p;
		}

		v2 = ((v2 * 10) % 11);

		if (v2 == 10) {
			v2 = 0;
		}

		if (v2 != cpf[10]) {
			return false;
		} else {
			return true;
		}
	} else if (val.length == 18) {
		var cnpj = val.trim();

		cnpj = cnpj.replace(/\./g, '');
		cnpj = cnpj.replace('-', '');
		cnpj = cnpj.replace('/', '');
		cnpj = cnpj.split('');

		var v1 = 0;
		var v2 = 0;
		var aux = false;

		for (var i = 1; cnpj.length > i; i++) {
			if (cnpj[i - 1] != cnpj[i]) {
				aux = true;
			}
		}

		if (aux == false) {
			return false;
		}

		for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
			if (p1 >= 2) {
				v1 += cnpj[i] * p1;
			} else {
				v1 += cnpj[i] * p2;
			}
		}

		v1 = (v1 % 11);

		if (v1 < 2) {
			v1 = 0;
		} else {
			v1 = (11 - v1);
		}

		if (v1 != cnpj[12]) {
			return false;
		}

		for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
			if (p1 >= 2) {
				v2 += cnpj[i] * p1;
			} else {
				v2 += cnpj[i] * p2;
			}
		}

		v2 = (v2 % 11);

		if (v2 < 2) {
			v2 = 0;
		} else {
			v2 = (11 - v2);
		}

		if (v2 != cnpj[13]) {
			return false;

		} else {
			return true;
		}
	} else {
		return false;
	}
}
//-------------------------------------------------------------------------------
function id(el) {
	return document.getElementById(el);
}
//3 - Eventos
//-------------------------------------------------------------------------------
// onkeyup - executar a cada letra digitada.
// onblur - executar quando o input perde o foco.
window.onload = function() {
	id('tel').onkeyup = function() {
		modificador(this, mTel);
	}
	id('cep').onkeyup = function() {
		modificador(this, mCep);
	}
	id('placa').onkeyup = function() {
		modificador(this, mPlaca);
	}
	id('placa').onblur = function() {
		modificador(this, vPlaca);
	}
	id('cpf-cnpj').onkeyup = function() {
		modificador(this, mCpfCnpj);
	}
	id('cpf-cnpj').onblur = function() {
		modificador(this, vCpfCnpj);
	}
	id('caracteres').onkeyup = function() {
		modificador(this, vCaracteres);
	}
	id('numerico').onkeyup = function() {
		modificador(this, mNumerico);
	}
	id('monetario').onkeyup = function() {
		modificador(this, mMonetario);
	}
}
//-------------------------------------------------------------------------------