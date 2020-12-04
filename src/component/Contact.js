import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="relative container-web">
			<div className="container">
				<div className="row bottom-margin-default">
					<div id="map" className=" map-contact relative overfollow-hidden">
						
					</div>
				</div>
				
				<div className="row footer-from-address">
					<div className="col-md-6 relative contact-info col-sm-12 col-xs-12">
						<div className="row">
							<p className="title-contact bold bottom-margin-default">Contact Infomation</p>
							<div className="relative clearfix row-info-contact full-width bottom-margin-default">
								<div className="relative left-row-info-contact">
									<img src="img/icon_office-min.png" alt="" />
								</div>
								<div className="relative right-row-info-contact">
									<p className="bold name-row-contact">Main Office</p>
									<p>PO Box 16122 Collins Street West, Victoria 8007 Australia</p>
									<p>Hotline: <a href="tel:19001901">19001901</a></p>
									<p>Fax: <a href="tel:02839759568">(028) 3975 9568</a></p>
									<p>Email: <a href="mailto:support@megastore.com">support@megastore.com</a></p>
								</div>
							</div>
							<div className="relative clearfix row-info-contact full-width bottom-margin-default top-margin-15-default">
								<div className="relative left-row-info-contact">
									<img src="img/icon_point_map-min.png" alt="" />
								</div>
								<div className="relative right-row-info-contact">
									<p className="bold name-row-contact">Sales Office</p>
									<p>121 King Street, Melbourne Victoria 3000 Australia</p>
									<p>Hotline: <a href="tel:19001901">19001901</a></p>
									<p>Fax: <a href="tel:02839759568">(028) 3975 9568</a></p>
									<p>Email: <a href="mailto:support@megastore.com">support@megastore.com</a></p>
								</div>
							</div>
							<div className="relative clearfix row-info-contact full-width bottom-margin-default top-margin-15-default">
								<div className="relative left-row-info-contact">
								</div>
								<div className="relative right-row-info-contact">
									<p>No. 1122  Marmora Road, South Large, California, USA</p>
									<p>Hotline: <a href="tel:19001901">19001901</a></p>
									<p>Fax: <a href="tel:02839759568">(028) 3975 9568</a></p>
									<p>Email: <a href="mailto:support@megastore.com">support@megastore.com</a></p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 relative contact-info col-sm-12 col-xs-12">
						<div className="row">
							<p className="title-contact bold bottom-margin-default">Submit a Message</p>
							<div className="relative full-width form-contact">
								<form method="POST" action="/" className="form-placeholde-animate">
						            <div className="field-wrap">
							            <label>
							            	First Name<span className="req">*</span>
							            </label>
							            <input type="text" name="name" required autocomplete="off" />
						            </div>
						            <div className="field-wrap">
							            <label>
							            	Phone number<span className="req">*</span>
							            </label>
							            <input type="text" name="phone" required autocomplete="off" />
						            </div>
						            <div className="field-wrap">
							            <label>
							            	Your email<span className="req">*</span>
							            </label>
							            <input type="text" name="email" required autocomplete="off" />
						            </div>
						            <div className="field-wrap">
							            <label>
							            	Message<span className="req">*</span>
							            </label>
							            <textarea required name="message" rows="6" autocomplete="off"></textarea>
						            </div>
						            <button type="submit" className="uppercase animate-default button-hover-red">send message</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}
export default Contact;
