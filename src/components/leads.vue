<template>
	<div class="leads content">
		<div class="popup" v-if="popup">
			<div class="popup-bg" @click="popup = false"></div>
			<div class="popup-body">
				<div class="popup-body-project" v-for="(project, i) in projects" @click="changeProject(i)">{{project.name}}</div>
			</div>
		</div>
		<div class="leads-header" @click="popup = true">
			{{$languages.leads.type}} {{projects[$route.params.id].name}}
		</div>
		<div class="leads-content">
			<div class="cell-4" v-for="lead in leads" v-if="lead.industry === projects[$route.params.id].data">
				<div class="leads-content-item">
					<div class="leads-content-item-header" :title="lead.company_name">
						<div>{{lead.company_name}}</div>
						<span><img src="/static/img/map.svg">{{lead.country}}</span>
					</div>
					<div class="leads-content-item-rows">
						<div class="leads-content-item-rows-row"><span>{{$languages.leads.rows[0]}}</span><span>{{lead.required_investment}}</span></div>
						<div class="leads-content-item-rows-row"><span>{{$languages.leads.rows[1]}}</span><span>{{lead.investment_type}}</span></div>
						<div class="leads-content-item-rows-row"><span>{{$languages.leads.rows[2]}}</span><span>{{lead.project_stage}}</span></div>
						<!-- <div class="leads-content-item-rows-row"><span>Доходность годовых</span><span>{{lead.project_stage}}</span></div> -->
					</div>
					<div class="leads-content-item-description">{{lead.description}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				popup: false,
				leads: [],
				projects: []
			}
		},
		watch:{
			$route:{
				handler(newData){
					this.changeLeads(newData.params.id)
				},
				deep: true
			}
		},
		created(){
			this.projects = this.$languages.projects
			this.changeLeads(this.$route.params.id)
		},
		methods:{
			changeProject(id){
				this.popup = false
				this.$router.push('/leads/'+id)
			},
			changeLeads(id){
				this.leads = []
				this.$axios.get('leads')
				.then(res => {
					for(let lead of res.data)
						if(this.$languages.projects[id].data === lead.industry)
							this.leads.push(lead)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";
	
	.cell-4{
		width: 33%;
    flex: 33% 0 0;
    align-items: flex-start;
  }
  .popup{
  	position: fixed;
  	width: 100vw;
  	height: 100vh;
  	z-index: 10;
  	top: 0;
  	left: 0;
  	&-bg{
  		position: absolute;
  		width: 100%;
  		height: 100%;
  		background-color: #00000050;
  	}
  	&-body{
  		background-color: $white;
  		width: 90%;
  		max-width: 750px;
  		border-radius: 15px;
  		max-height: 80%; 
  		justify-content: flex-start;
  		overflow: auto;
  		&-project{
  			display: block;
  			text-align: left;
  			padding: 16px 12px;
  			cursor: pointer;
  		}
  	}
  }
  .leads{
  	padding: 100px 16px;
  	min-height: 100vh;
  	align-items: flex-start;
  	justify-content: flex-start;
		&-header{
			width: auto;
			text-align: left;
			color: $blue_d;
			font-weight: 800;
			font-size: 32px;
			line-height: 44px;
			margin-bottom: 60px;
			padding-right: 30px;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&:after{
				content: "";
				right: 0;
				margin-top: -5px;
				height: 20px;
				width: 20px;
				border-right: 2px solid $blue_d;
				border-bottom: 2px solid $blue_d;
				transform: rotate(45deg);
				position: absolute;
			}
		}
		&-content{
			flex-direction: row;
			align-items: flex-start;
			justify-content: flex-start;
			flex-wrap: wrap;
			&-item{
				background-color: $white;
				border-radius: 15px;
				width: 95%;
				max-width: 95%;
				padding: 30px;
				align-items: flex-start;
				justify-content: flex-start;
				// min-height: 400px;
				max-height: 400px;
				&-header{
					flex-direction: row;
					justify-content: flex-start;
					color: $blue_d;
					font-weight: 800;
					font-size: 18px;
					line-height: 16px;
					margin-bottom: 32px;
					&>div{
						display: block;
						white-space: nowrap;
				    text-align: left;
				    width: auto;
				    max-width: 40%;
				    overflow: hidden;
				    text-overflow: ellipsis;
					}
					&>span{
						// display: flex;
						// width: auto;
						// flex-direction: row;
						color: #93979D;
						&>img{
							padding: 0 22px 0 10px;
						}
					}
				}
				&-rows{
					margin-bottom: 12px;
					&-row{
						flex-direction: row;
						align-items: flex-start;
						justify-content: space-between;
						margin-bottom: 12px;
						&>span{
							font-size: 16px;
							line-height: 16px;
							word-break: break-word;
					    text-align: left;
					    max-width: 50%;
							color: #93979D;
							&:last-child{
								color: #333333;								
							}
						}
					}
				}
				&-description{
					overflow-y: auto;
					word-break: break-word;
			    text-align: left;
			    // width: 50%;
					align-items: flex-start;
					text-align: left;
					color: #333333;
					font-weight: 500;
					font-size: 16px;
					line-height: 24px;
				}
			}
		}
  }


  @media screen and (max-width: 760px){
  	.leads{
  		padding: 25px 16px;
  		&-header{
  			padding-bottom: 20px;
  		}
  		&-content-item{

				max-height: 90vh;
  			width: 100%;
  			margin-bottom: 20px;
  		}
  	}
  	.cell-4{
  		width: 100%;
      flex: 100% 0 0;
    }
  }
</style>