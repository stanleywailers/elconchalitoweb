
const apiKey = '1a8460a2392d428b811162b89f341cdb';
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey



export const sendEmailValidationRequest = async (email: string): Promise<EmailValidationResponse> => {
    try {
      const response = await fetch(apiURL + '&email=' + email);
      const data = await response.json();
  
      // Assuming the API response structure matches EmailValidationResponse
      return data as EmailValidationResponse;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

interface EmailValidationResponse {
    email: string;
    autocorrect: string;
    deliverability: string;
    quality_score: string;
    is_valid_format: {
      value: boolean;
      text: string;
    };
    is_free_email: {
      value: boolean;
      text: string;
    };
    is_disposable_email: {
      value: boolean;
      text: string;
    };
    is_role_email: {
      value: boolean;
      text: string;
    };
    is_catchall_email: {
      value: boolean;
      text: string;
    };
    is_mx_found: {
      value: boolean;
      text: string;
    };
    is_smtp_valid: {
      value: boolean;
      text: string;
    };
  }