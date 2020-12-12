import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'


const Footer = () => {

const footerdata = useStaticQuery(graphql`
    {
      allContentfulFooter {
        nodes {
          officeLocation1
          officeLocation2
          officeLocation3
          officeAddress1
          officeAddress2
          officeAddress3
          officeContact1
          officeContact2
          officeContact3
          officeMail1
          officeMail2
          officeMail3
        }
      }
    }
`)



    return (
        <>
	<div className="section info overlap-bottom">
		<div className="container">
			<div className="row">
				
				<div className="col-sm-4 col-md-4">
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-phone"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation1}</div>
							Office Telephone: +92 21 34144447 <br/>
							Mobile: +92 21 34144447
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-map-marker"></i></div>
						<div className="body-content">
							<div className="heading">Office ADDRESS</div>
							Suite 203, 59/3 Marium Complex, Bahadurabad
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-envelope"></i></div>
						<div className="body-content">
							<div className="heading">SEND US A MESSAGE</div>
							General: info@global.com<br/>
							Sales: sales@global.com
						</div>
					</div>
				</div>
				
			</div>

		</div>
	</div>

	<div className="footer">
		
		<div className="container">
			
			<div className="row">
				<div className="col-sm-3 col-md-3">
					<div className="footer-item">
						<img src="images/logo-light.png" alt="logo bottom" className="logo-bottom"/>
						<p>We are a global multi-functional enterprise in the chemical industry with out corporate headquarters in Hamburg, Germany.</p>
						<div className="footer-sosmed">
							<Link to="" title="">
								<div className="item">
									<i className="fa fa-facebook"></i>
								</div>
							</Link>
							<Link to="" title="">
								<div className="item">
									<i className="fa fa-twitter"></i>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-3 col-md-3">
					<div className="footer-item">
						<div className="footer-title">
						Press Release
						</div>
						<ul className="recent-post">
							<li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li><li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-3 col-md-3">
					<div className="footer-item">
						<div className="footer-title">
							Company
						</div>
						<ul className="list">
							<li><Link to="" title="">Our Core</Link></li>
							<li><Link to="" title="">Business Segments</Link></li>
							<li><Link to="" title="">News / Press Release</Link></li>
							<li><Link to="" title="">Careers</Link></li>
							<li><Link to="" title="">Downloads</Link></li>
							<li><Link to="" title="">Imprint</Link></li>
							<li><Link to="" title="">Cookie Policy</Link></li>
							<li><Link to="" title="">Data Protection</Link></li>
						</ul>
					</div>
				</div>
				<div className="col-sm-3 col-md-3">
					<div className="footer-item">
						<div className="footer-title">
							Subscribe
						</div>
						<p>Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing</p>
						<form action="#" className="footer-subscribe">
			              <input type="email" name="EMAIL" className="form-control" placeholder="enter your email"/>
			              <input id="p_submit" type="submit" value="send"/>
			              <label for="p_submit"><i className="fa fa-envelope"></i></label>
			            </form>
					</div>
				</div>
			</div>
		</div>
		
		<div className="fcopy">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12">
						<p className="ftex">Copyright © 2020 , All Rights Reserved</p> 
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
        </>
    )
}

export default Footer
