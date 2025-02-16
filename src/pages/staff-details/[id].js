/* eslint-disable react/no-unknown-property */
import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import data from "../../../data/staff_data.json";
import { useState } from "react";

export default function StaffDetails() {
  let Router = useRouter();
  const [staffDetails, setStaffDetails] = useState(null);
  const { id } = Router.query;

  useEffect(() => {
    setStaffDetails(
      data.staffMembers.find((staff) => staff.id === parseInt(id))
    );
  }, [id]);

  if (!staffDetails) {
    return null;
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Staff Details">
        <section className="instructor-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="instructor-details-wrap"
                  style={{ alignItems: "center" }}
                >
                  <div
                    className="instructor-details-img"
                    style={{ position: "relative" }}
                  >
                    <div
                      className="instructor__shape"
                      style={staffDetails.shape}
                    />
                    <img src={staffDetails.image} alt={staffDetails.name} />
                  </div>
                  <div className="instructor-details-content">
                    <div className="content-top">
                      <div className="left-side-content">
                        <h2 className="title">{staffDetails.name}</h2>
                        <span>{staffDetails.designation}</span>
                      </div>
                      <div className="instructor-details-social">
                        {/* <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    <div className="instructor-info-wrap">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-email" />
                          <Link href={`mailto:${staffDetails.email}`}>
                            {staffDetails.email}
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-group-1" />
                          {staffDetails.phone}
                        </li>
                        <li>
                          <i className="flaticon-file" />
                          Experience: 5+ Years
                        </li>
                      </ul>
                    </div>
                    <div className="bio-content">
                      <h4 className="title">Short Bio:</h4>
                      <p>{staffDetails.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <style jsx>{`
        .instructor-details-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 40px;
        }

        .instructor-details-img {
          max-width: 300px;
          max-height: 350px;
          width: 100%;
        }

        .instructor-details-img img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          position: relative;
          z-index: 1;
        }

        .instructor__shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          max-height: 300px;
          z-index: 0;
        }

        .instructor-details-content {
          flex: 1;
        }

        @media (max-width: 991px) {
          .instructor-details-wrap {
            flex-direction: column;
            text-align: center;
          }

          .instructor-details-img {
            margin-bottom: 30px;
          }

          .content-top {
            justify-content: center;
          }

          .instructor-info-wrap ul {
            justify-content: center;
          }
        }
      `}</style>
      y
    </>
  );
}
