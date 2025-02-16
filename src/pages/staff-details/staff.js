import StaffCard from "../../../components/common/StaffCard";
import staffData from "../../../data/staff_data.json";

function Staff() {
  return (
    <>
      <section className="instructor-area pt-60 pb-70">
        <div className="container">
          <div className="section__title text-center mb-50">
            <h2 className="title">School Staff</h2>
            <p className="pb-20">
              Our dedicated team of professionals crafting the student&apos;s future.
            </p>
          </div>
          <div className="row justify-content-center">
            {staffData.staffMembers.map((staff) => (
              <div key={staff.id} className="col-xl-3 col-lg-4 col-sm-6">
                <StaffCard staff={staff} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .section__title {
          text-align: center;
        }
        .section__title .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .section__title p {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          color: #555;
        }
      `}</style>
    </>
  );
}

export default Staff;
