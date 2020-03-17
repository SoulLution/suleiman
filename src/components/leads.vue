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
			<div class="cell-4" v-for="lead in leads">
				<div class="leads-content-item">
					<div class="leads-content-item-header">
						{{lead.company_name}}
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
				this.$axios.get('leads')
				.then(res => {
					this.leads = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";
	
	.cell-4{
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
  		}
  	}
  }
  .leads{
  	padding: 100px 16px;
		&-header{
			display: block;
			text-align: left;
			color: $blue_d;
			font-weight: 800;
			font-size: 32px;
			line-height: 44px;
			margin-bottom: 60px;
		}
		&-content{
			flex-direction: row;
			justify-content: flex-start;
			flex-wrap: wrap;
			&-item{
				background-color: $white;
				border-radius: 15px;
				width: 95%;
				padding: 30px;
				&-header{
					flex-direction: row;
					justify-content: flex-start;
					color: $blue_d;
					font-weight: 800;
					font-size: 18px;
					line-height: 16px;
					margin-bottom: 32px;
					&>span{
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
						justify-content: space-between;
						margin-bottom: 12px;
						&>span{
							font-size: 16px;
							line-height: 16px;
							color: #93979D;
							&:last-child{
								color: #333333;								
							}
						}
					}
				}
				&-description{
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
  			width: 100%;
  			margin-bottom: 20px;
  		}
  	}
  	.cell-4{
      flex: 100% 0 0;
    }
  }
</style>