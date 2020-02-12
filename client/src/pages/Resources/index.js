import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import recs from "./recs";
import './style.css';

class Resources extends Component {

  state = {
    rDiv: "r1",
    activated: false
  }
  
  mapBullets = (bullet, idx) => {
    if (typeof (bullet) === "string") {
      return <li key={idx}><h5>{bullet}</h5></li>
    } else {
      return bullet.map((item, idx) => this.mapSubBullets(item, idx))
    }
  }

  mapSubBullets = (item, idx) => {
    return <li className="ml-3" key={idx}><h5>{item}</h5></li>
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="jumbotron">
              <div>
                <h1 className="text-center mb-4">Resources</h1>
                <Container fluid>
                  <Row>
                    <Col md={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="table-responsive">
                      <h3 className="text-center mb-2">MEDA Guides</h3>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th className="heading" scope="col">Resource</th>
                              <th className="download heading" scope="col">Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recs.ClientFlow.display}</td>
                              <td className="download">
                                <a href={recs.ClientFlow.file} download={recs.ClientFlow.download}>
                                  {recs.ClientFlow.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.WorkFlow.display}</td>
                              <td className="download">
                                <a href={recs.WorkFlow.file} download={recs.WorkFlow.download}>
                                  {recs.WorkFlow.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.BudgetTemplate.display}</td>
                              <td className="download">
                                <a href={recs.BudgetTemplate.file} download={recs.BudgetTemplate.download}>
                                  {recs.BudgetTemplate.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.CreditReportGuide.display}</td>
                              <td className="download">
                                <a href={recs.CreditReportGuide.file} download={recs.CreditReportGuide.download}>
                                  {recs.CreditReportGuide.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.InstantMerge.display}</td>
                              <td className="download">
                                <a href={recs.InstantMerge.file} download={recs.InstantMerge.download}>
                                  {recs.InstantMerge.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.FreePrograms.display}</td>
                              <td className="download">
                                <a href={recs.FreePrograms.file} download={recs.FreePrograms.download}>
                                  {recs.FreePrograms.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.DiscTracker.display}</td>
                              <td className="download">
                                <a href={recs.DiscTracker.file} download={recs.DiscTracker.download}>
                                  {recs.DiscTracker.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.VivaModel.display}</td>
                              <td className="download">
                                <a href={recs.VivaModel.file} download={recs.VivaModel.download}>
                                  {recs.VivaModel.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.ToolkitGuide.display}</td>
                              <td className="download">
                                <a href={recs.ToolkitGuide.file} download={recs.ToolkitGuide.download}>
                                  {recs.ToolkitGuide.type}
                                </a>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </Col>

                    <Col md={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="table-responsive">
                        <h3 className="text-center mb-2">Client Worksheets</h3>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th className="heading" scope="col">Resource</th>
                              <th className="download heading" scope="col">Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recs.ActionPlan.display}</td>
                              <td className="download">
                                <a href={recs.ActionPlan.file} download={recs.ActionPlan.download}>
                                  {recs.ActionPlan.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.ActionPlanES.display}</td>
                              <td className="download">
                                <a href={recs.ActionPlanES.file} download={recs.ActionPlanES.download}>
                                  {recs.ActionPlanES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Checklist.display}</td>
                              <td className="download">
                                <a href={recs.Checklist.file} download={recs.Checklist.download}>
                                  {recs.Checklist.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.ChecklistES.display}</td>
                              <td className="download">
                                <a href={recs.ChecklistES.file} download={recs.ChecklistES.download}>
                                  {recs.ChecklistES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.FinancialAssessment.display}</td>
                              <td className="download">
                                <a href={recs.FinancialAssessment.file} download={recs.FinancialAssessment.download}>
                                  {recs.FinancialAssessment.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.FinancialAssessmentES.display}</td>
                              <td className="download">
                                <a href={recs.FinancialAssessmentES.file} download={recs.FinancialAssessmentES.download}>
                                  {recs.FinancialAssessmentES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.StartYourJourney.display}</td>
                              <td className="download">
                                <a href={recs.StartYourJourney.file} download={recs.StartYourJourney.download}>
                                  {recs.StartYourJourney.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.StartYourJourneyES.display}</td>
                              <td className="download">
                                <a href={recs.StartYourJourneyES.file} download={recs.StartYourJourneyES.download}>
                                  {recs.StartYourJourneyES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.OrientationSurvey.display}</td>
                              <td className="download">
                                <a href={recs.OrientationSurvey.file} download={recs.OrientationSurvey.download}>
                                  {recs.OrientationSurvey.type}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>

                    <Col md={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="table-responsive">
                        <h3 className="text-center mb-2 mt-3">Presentation Slides</h3>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th className="heading" scope="col">Resource</th>
                              <th className="download heading" scope="col">Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recs.FinancialCoaching.display}</td>
                              <td className="download">
                                <a href={recs.FinancialCoaching.file} download={recs.FinancialCoaching.download}>
                                  {recs.FinancialCoaching.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.FinCap.display}</td>
                              <td className="download">
                                <a href={recs.FinCap.file} download={recs.FinCap.download}>
                                  {recs.FinCap.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Orientation.display}</td>
                              <td className="download">
                                <a href={recs.Orientation.file} download={recs.Orientation.download}>
                                  {recs.Orientation.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.OrientationES.display}</td>
                              <td className="download">
                                <a href={recs.OrientationES.file} download={recs.OrientationES.download}>
                                  {recs.OrientationES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.OrientationTraining.display}</td>
                              <td className="download">
                                <a href={recs.OrientationTraining.file} download={recs.OrientationTraining.download}>
                                  {recs.OrientationTraining.type}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <h3 className="text-center" id="lib-header">Resource Library</h3>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col" colSpan="2"><h4 id="subheader">Download the full collection here</h4></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recs.VivaToolkit.display}</td>
                              <td className="download">
                                <a href={recs.VivaToolkit.file} download={recs.VivaToolkit.download}>
                                  {recs.VivaToolkit.type}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>

                    <Col md={{ span: 6 }} sm={{ span: 12 }}>
                      <div className="table-responsive">
                        <h3 className="text-center mb-2 mt-3">Print Materials</h3>
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th className="heading" scope="col">Resource</th>
                              <th className="download heading" scope="col">Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{recs.ActionPlanChecklist.display}</td>
                              <td className="download">
                                <a href={recs.ActionPlanChecklist.file} download={recs.ActionPlanChecklist.download}>
                                  {recs.ActionPlanChecklist.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.CardsSpinner.display}</td>
                              <td className="download">
                                <a href={recs.CardsSpinner.file} download={recs.CardsSpinner.download}>
                                  {recs.CardsSpinner.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.JourneyAssessment.display}</td>
                              <td className="download">
                                <a href={recs.JourneyAssessment.file} download={recs.JourneyAssessment.download}>
                                  {recs.JourneyAssessment.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Cards.display}</td>
                              <td className="download">
                                <a href={recs.Cards.file} download={recs.Cards.download}>
                                  {recs.Cards.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.CardsES.display}</td>
                              <td className="download">
                                <a href={recs.CardsES.file} download={recs.CardsES.download}>
                                  {recs.CardsES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.SpinnerMat.display}</td>
                              <td className="download">
                                <a href={recs.SpinnerMat.file} download={recs.SpinnerMat.download}>
                                  {recs.SpinnerMat.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Sticker5x3.display}</td>
                              <td className="download">
                                <a href={recs.Sticker5x3.file} download={recs.Sticker5x3.download}>
                                  {recs.Sticker5x3.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Sticker5x3ES.display}</td>
                              <td className="download">
                                <a href={recs.Sticker5x3ES.file} download={recs.Sticker5x3ES.download}>
                                  {recs.Sticker5x3ES.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.Sticker6x4.display}</td>
                              <td className="download">
                                <a href={recs.Sticker6x4.file} download={recs.Sticker6x4.download}>
                                  {recs.Sticker6x4.type}
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>{recs.ToolkitOverview.display}</td>
                              <td className="download">
                                <a href={recs.ToolkitOverview.file} download={recs.ToolkitOverview.download}>
                                  {recs.ToolkitOverview.type}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>
                </Container>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { state };
}

export default compose(
  connect(mapStateToProps, {}),
)(Resources);