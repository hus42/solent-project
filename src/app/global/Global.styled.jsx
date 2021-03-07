import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #eeeeee;

    }

    body, input, button, textarea {
        font-size: 1rem;
        font-family: Calibri, 'Trebuchet MS', sans-serif;
    }

    input {
    outline-width: 0;
}


/*-------Navigation START-------*/
.navbar {
	ul {
        font-size: 16px;
		margin: 0;
		padding: 10px 0 10px 0;
		text-align: right;
		background-color: #EEEEEE;
		li {
			display: inline;
            
			a {
                font-family: "Blis","Helvetica Neue";
                text-decoration: none;
				padding: 12px 50px;
                color: #212121;
                font-weight: 300;
				background-color: #EEEEEE;
				&:hover {
					color: #FFFFFF;
					background-color: #e20613;
				}
			}
		}
	}
}

/*-------Navigation END-------*/


/*---------GetUsersFandC START---------*/
.input-group {
	display: flex;
}
.input-group-icon {
	background: #ffffff;
	border-radius: 0px 5px 5px 0px;
}
&::-webkit-input-placeholder {
	color: #d2d2d2;
}
.hidden {
	display: none;
}
.profile-img {
	border-radius: 50%;
	vertical-align: middle;
	margin: 5px;
	border: 1px solid #333333;
}
.padding-top-40 {
	padding-top: 40px;
}
.padding-bottom-20 {
	padding-bottom: 20px;
}
.panel-info {
	display: table-cell;
	vertical-align: middle;
}
.circle-arrow {
	float: right;
	padding: 12px;
}
.search-button {
	display: flex;
	padding: 7px;
}
.loading-center {
	text-align: center;
	color: #575757;
	font-size: 20px;
	padding-top: 30px;
}
.user-detail-icon {
	width: 25px;
	height: auto;
	margin-right: 3px;
}
.user-details-panel {
	padding: 70px 0px 250px 0px;
}
.icon-title {
	font-size: 18px;
	color: #575757;
}
@media (max-width: 768px) {
	.input-group {
		align-items: center;
		justify-content: center;
	}
}
@media (max-width: 1023px) {
	.icon-title {
		display: grid;
	}
	.user-detail-icon {
		margin-bottom: 5px !important;
	}
}
/*------ Profile page styles END------*/
`;
