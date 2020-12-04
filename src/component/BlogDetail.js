import React, { Component } from 'react';

class BlogDetail extends Component{
    render(){
        return(
            <div className="relative container-web">
			<div className="container">
				<div className="row relative">
					
					<div className="col-md-12 col-sm-12 col-xs-12 relative clearfix left-content-detail clear-padding-left">
						<div className="col-md-8 col-sm-12 col-xs-12">
							<div className="row">
								<h1 className="title-blog-detail">Women-owned businesses thrive with Amazon Services</h1>
								<div className="date-blog">
									<p className="clear-margin right-margin-default uppercase">DATE : <span className="text-red">November 18, 2018</span></p>
									<p className="clear-margin uppercase">By : <span className="text-red">Administratorr</span></p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 css_content col-sm-12 col-xs-12">
								<p className="noti-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi atecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem quia voluptas sitLorem ipsum dolor sit amet.</p>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
								<p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
							<div className="col-md-2">
								<div className="social-siderbar relative">
									<p>Share <i className="fa fa-share-alt" aria-hidden="true"></i></p>
									<ul className="top-margin-default">
										<li className="animate-default"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li className="animate-default"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li className="animate-default"><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
										<li className="animate-default"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
								<div className="col-md-12 css_content content-row">
									<img src="img/image_detail-min.png" alt=""/>
									<img className="hidden-mobile" src="img/image_detail_sidebar-min.png" alt=""/>
								</div>
								<div className="col-md-8 col-sm-12 css_content">
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. There are many variations of passages of Lorem Ipsum available,</p>
									<p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. There are many variations of passages of Lorem Ipsum available,</p>
									<p>but the majority have suffered alteration in some form, by injected humour, or randomised words whidon't look even slightly believable...Sed ut perspiciatis unde omnis iste natus error sit voluptatem loremque laudatium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
								<div className="col-md-4 note-text-siderbar">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
									<p>Any sufficiently advanced technology is indistinguishable from magic.</p>
								</div>
						</div>
						
					</div>
					
					<div className="relative clearfix full-width">
						<div className="row">
							<div className="col-md-8 col-sm-12 col-xs-12">
								<aside className="relative box-comment border no-border-b no-border-l top-padding-default no-border-r">
								<div className="title-comment">
									<p className="count-coment clear-margin relative">01 comment</p>
									<p className="count-review bold relative clear-margin">0</p>
								</div>
								<div className="box-awesome top-margin-default bottom-margin-default relative">
									<div className="relative overfollow-hidden avatar-comment center-vertical-image">
										<img src="img/avarta_commen-min.png" alt="" />
									</div>
									<div className="relative right-box-comment">
										<textarea rows="1" name="comment" placeholder="Leave a message..."></textarea>
									</div>
								</div>
								<div className="relative overfollow-hidden comment-content">
										<div className="title-comment-content">
											<div className="relative">
												<p className="clear-margin active-title-comment title-comment-box-tabs title-tabs-comment-1 title-hover-black" onclick="selectTabComment(1)"><span>Best</span> <i className="fa fa-caret-down" aria-hidden="true"></i></p>
												<p className="clear-margin title-comment-box-tabs title-tabs-comment-2 title-hover-black" onclick="selectTabComment(2)">Community</p>
											</div>
											<div className="relative">
												<p className="clear-margin animate-default title-hover-black">Share <i className="fa fa-share-square-o" aria-hidden="true"></i></p>
												<p className="clear-margin animate-default title-hover-black"><i className="fa fa-cog" aria-hidden="true"></i> <i className="fa fa-caret-down" aria-hidden="true"></i></p>
											</div>
										</div>
										<div className="relative content-comment-box top-padding-15-default bottom-padding-15-default">
											
											<aside className="comment-g-tab-1 active-comment-g-tab comment-g-tab relative">
												<div className="comment-ask comment-gird relative">
													<div className="relative overfollow-hidden avatar-comment center-vertical-image">
														<img src="img/avarta_commen-min.png" alt="" />
													</div>
													<div className="relative right-box-comment">
														<div className="row-comment-1">
															<p className="name-user-comment clear-margin">Shival ( K )</p>
															<p className="time-comment">5 hours ago</p>
														</div>
														<div className="row-comment-2">
															<p className="clear-margin">I loving this peer multi shop - so easy to edit to see what my design looks like before I install :)</p>
														</div>
														<div className="row-comment-3">
															<i className="fa fa-angle-down" aria-hidden="true"></i>
															<i className="fa fa-angle-up" aria-hidden="true"></i>
															<a href="#" className="animate-default title-hover-black">Reply</a>
															<a href="#" className="animate-default title-hover-black">Share <i className="fa fa-angle-right" aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
											</aside>
											
											<aside className="comment-g-tab-2 comment-g-tab">
												<div className="comment-ask comment-gird relative">
													<div className="relative overfollow-hidden avatar-comment center-vertical-image">
														<img src="img/avarta_commen-min.png" alt="" />
													</div>
													<div className="relative right-box-comment">
														<div className="row-comment-1">
															<p className="name-user-comment clear-margin">Shival ( K )</p>
															<p className="time-comment">5 hours ago</p>
														</div>
														<div className="row-comment-2">
															<p className="clear-margin">I loving this peer multi shop - so easy to edit to see what my design looks like before I install :)</p>
														</div>
														<div className="row-comment-3">
															<a className="animate-default title-hover-black" href="#"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
															<a className="animate-default title-hover-black" href="#"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
															<a href="#" className="animate-default title-hover-black">Reply</a>
															<a href="#" className="animate-default title-hover-black">Share <i className="fa fa-angle-right" aria-hidden="true"></i></a>
														</div>
													</div>
												</div>
											</aside>
											
										</div>
										<div className="option-bottom-comment top-padding-15-default border no-border-l no-border-r no-border-b">
											<a href="#" className="animate-default title-hover-black"><i className="fa fa-rss" aria-hidden="true"></i> Comment feed</a>
											<a href="#" className="animate-default title-hover-black"><i className="fa fa-envelope-o" aria-hidden="true"></i> Subscribe via email </a>
										</div>
									</div>
							</aside>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
        );
    }
}
export default BlogDetail;