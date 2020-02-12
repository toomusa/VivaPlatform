import ActionPlanChecklist from "../../assets/recs/MEDA_Folders_ActionPlanChecklist.pdf";
import CardsSpinner from "../../assets/recs/MEDA_Folders_CardsSpinner.pdf";
import JourneyAssessment from "../../assets/recs/MEDA_Folders_JourneyAssessment.pdf";
import Cards from "../../assets/recs/MEDA_Game_Cards.pdf";
import CardsES from "../../assets/recs/MEDA_Game_Cards_ES.pdf";
import SpinnerMat from "../../assets/recs/MEDA_Game_SpinnerMat.pdf";
import ClientFlow from "../../assets/recs/MEDA_Recs_ABP_ClientFlow.pdf";
import WorkFlow from "../../assets/recs/MEDA_Recs_ABP_WorkFlow.pdf";
import BudgetTemplate from "../../assets/recs/MEDA_Recs_BudgetTemplate.pdf";
import CreditReportGuide from "../../assets/recs/MEDA_Recs_Credco_CreditReportGuide.pdf";
import InstantMerge from "../../assets/recs/MEDA_Recs_Credco_InstantMerge.pdf";
import FreePrograms from "../../assets/recs/MEDA_Recs_Free_Programs.pdf";
import DiscTracker from "../../assets/recs/MEDA_Recs_Ventures_DISC_Tracker.xlsx";
import VivaModel from "../../assets/recs/MEDA_Recs_VivaModel.pdf";
import FinancialCoaching from "../../assets/recs/MEDA_Slides_FinancialCoachingTraining.pptx";
import FinCap from "../../assets/recs/MEDA_Slides_FinCap_Workshop.pptx";
import Orientation from "../../assets/recs/MEDA_Slides_Orientation.pptx";
import OrientationES from "../../assets/recs/MEDA_Slides_Orientation_ES.pptx";
import OrientationTraining from "../../assets/recs/MEDA_Slides_OrientationTraining.pptx";
import Sticker5x3 from "../../assets/recs/MEDA_Sticker_5x3.pdf";
import Sticker5x3ES from "../../assets/recs/MEDA_Sticker_5x3_ES.pdf";
import Sticker6x4 from "../../assets/recs/MEDA_Sticker_6x4.pdf";
import ToolkitOverview from "../../assets/recs/MEDA_Sticker_ToolkitOverview.pdf";
import ToolkitGuide from "../../assets/recs/MEDA_ToolkitGuide.pdf";
import ActionPlan from "../../assets/recs/MEDA_Worksheet_ActionPlan.pdf";
import ActionPlanES from "../../assets/recs/MEDA_Worksheet_ActionPlan_ES.pdf";
import Checklist from "../../assets/recs/MEDA_Worksheet_Checklist.pdf";
import ChecklistES from "../../assets/recs/MEDA_Worksheet_Checklist_ES.pdf";
import FinancialAssessment from "../../assets/recs/MEDA_Worksheet_FinancialAssessment.pdf";
import FinancialAssessmentES from "../../assets/recs/MEDA_Worksheet_FinancialAssessment_ES.pdf";
import StartYourJourney from "../../assets/recs/MEDA_Worksheet_StartYourJourney.pdf";
import StartYourJourneyES from "../../assets/recs/MEDA_Worksheet_StartYourJourney_ES.pdf";
import OrientationSurvey from "../../assets/recs/MEDA_Worksheet_OrientationSurvey.pdf";
import VivaToolkit from "../../assets/recs/MEDA_VIVA_Toolkit.zip";

const recs = {
  ActionPlanChecklist: { 
    type: "PDF", display: "Action Plan Checklist", download: "MEDA_Folders_ActionPlanChecklist.pdf", file: ActionPlanChecklist },
  CardsSpinner: { 
    type: "PDF", display: "Cards Spinner", download: "MEDA_Folders_CardsSpinner.pdf", file: CardsSpinner },
  JourneyAssessment: { 
    type: "PDF", display: "Journey Assessment", download: "MEDA_Folders_JourneyAssessment.pdf", file: JourneyAssessment },
  CardsES: { 
    type: "PDF", display: "Game Cards ES", download: "MEDA_Game_Cards_ES.pdf", file: CardsES },
  Cards: { 
    type: "PDF", display: "Game Cards", download: "MEDA_Game_Cards.pdf", file: Cards },
  SpinnerMat: { 
    type: "PDF", display: "Game Spinner Mat", download: "MEDA_Game_SpinnerMat.pdf", file: SpinnerMat },
  ClientFlow: { 
    type: "PDF", display: "Asset Building Program - Client Flow", download: "MEDA_Recs_ABP_ClientFlow.pdf", file: ClientFlow },
  WorkFlow: { 
    type: "PDF", display: "Asset Building Program - Work Flow", download: "MEDA_Recs_ABP_WorkFlow.pdf", file: WorkFlow },
  BudgetTemplate: { 
    type: "PDF", display: "Budget Template", download: "MEDA_Recs_BudgetTemplate.pdf", file: BudgetTemplate },
  CreditReportGuide: { 
    type: "PDF", display: "Credco Credit Report Guide", download: "MEDA_Recs_Credco_CreditReportGuide.pdf", file: CreditReportGuide },
  InstantMerge: { 
    type: "PDF", display: "Credco Instant Merge", download: "MEDA_Recs_Credco_InstantMerge.pdf", file: InstantMerge },
  FreePrograms: { 
    type: "PDF", display: "Free Programs", download: "MEDA_Recs_Free_Programs.pdf", file: FreePrograms },
  DiscTracker: { 
    type: "XLS", display: "Ventures DISC Tracker", download: "MEDA_Recs_Ventures_DISC_Tracker.xlsx", file: DiscTracker },
  VivaModel: { 
    type: "PDF", display: "VIVA Model", download: "MEDA_Recs_VivaModel.pdf", file: VivaModel },
  FinancialCoaching: { 
    type: "PPT", display: "Financial Coaching ", download: "MEDA_Slides_FinancialCoachingTraining.pptx", file: FinancialCoaching },
  FinCap: { 
    type: "PPT", display: "Financial Capacity Workshop", download: "MEDA_Slides_FinCap_Workshop.pptx", file: FinCap },
  OrientationES: { 
    type: "PPT", display: "Orientation ES", download: "MEDA_Slides_Orientation_ES.pptx", file: OrientationES },
  Orientation: { 
    type: "PPT", display: "Orientation", download: "MEDA_Slides_Orientation.pptx", file: Orientation },
  OrientationTraining: { 
    type: "PPT", display: "Orientation Training", download: "MEDA_Slides_OrientationTraining.pptx", file: OrientationTraining },
  Sticker5x3ES: { 
    type: "PDF", display: "Sticker 5x3 ES", download: "MEDA_Sticker_5x3_ES.pdf", file: Sticker5x3ES },
  Sticker5x3: { 
    type: "PDF", display: "Sticker 5x3", download: "MEDA_Sticker_5x3.pdf", file: Sticker5x3 },
  Sticker6x4: { 
    type: "PDF", display: "Sticker 6x4", download: "MEDA_Sticker_6x4.pdf", file: Sticker6x4 },
  ToolkitOverview: { 
    type: "PDF", display: "Sticker Toolkit Overview", download: "MEDA_Sticker_ToolkitOverview.pdf", file: ToolkitOverview },
  ToolkitGuide: { 
    type: "PDF", display: "Toolkit Guide", download: "MEDA_ToolkitGuide.pdf", file: ToolkitGuide },
  ActionPlanES: { 
    type: "PDF", display: "Action Plan ES", download: "MEDA_Worksheet_ActionPlan_ES.pdf", file: ActionPlanES },
  ActionPlan: { 
    type: "PDF", display: "Action Plan", download: "MEDA_Worksheet_ActionPlan.pdf", file: ActionPlan },
  ChecklistES: { 
    type: "PDF", display: "Checklist ES", download: "MEDA_Worksheet_Checklist_ES.pdf", file: ChecklistES },
  Checklist: { 
    type: "PDF", display: "Checklist", download: "MEDA_Worksheet_Checklist.pdf", file: Checklist },
  FinancialAssessmentES: { 
    type: "PDF", display: "Financial Assessment ES", download: "MEDA_Worksheet_FinancialAssessment_ES.pdf", file: FinancialAssessmentES },
  FinancialAssessment: { 
    type: "PDF", display: "Financial Assessment", download: "MEDA_Worksheet_FinancialAssessment.pdf", file: FinancialAssessment },
  StartYourJourneyES: { 
    type: "PDF", display: "Start Your Journey ES", download: "MEDA_Worksheet_StartYourJourney_ES.pdf", file: StartYourJourneyES },
  StartYourJourney: { 
    type: "PDF", display: "Start Your Journey", download: "MEDA_Worksheet_StartYourJourney.pdf", file: StartYourJourney },
  OrientationSurvey: { 
    type: "PDF", display: "Orientation Survey", download: "MEDA_Worksheet_OrientationSurvey.pdf", file: OrientationSurvey },
  VivaToolkit: { 
    type: "ZIP", display: "VIVA Toolkit", download: "MEDA_VIVA_Toolkit.zip", file: VivaToolkit },
}

export default recs;


































