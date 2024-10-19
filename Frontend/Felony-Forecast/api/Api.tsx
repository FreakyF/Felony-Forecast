export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export const sendToBackend = async (endpoint: string, payload: any): Promise<ApiResponse> => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (response.ok) {
            return {success: true, message: "Data sent successfully", data};
        } else {
            return {success: false, message: data.error || "Failed to send data"};
        }
    } catch (error) {
        console.error('Error sending data:', error);
        return {success: false, message: "Failed to send data"};
    }
};