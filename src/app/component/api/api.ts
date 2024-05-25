interface Data {
  }

  export async function fetchData(url: string): Promise<Data[]> {
    const response = await fetch(url);
    const data: Data[] = await response.json();
    return data;
  }

  export async function postData(url: string, body: Data): Promise<Data> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data: Data = await response.json();
    return data;
  }

  export async function putData(url: string, body: Data): Promise<Data> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data: Data = await response.json();
    return data;
  }
  
  export async function deleteData(url: string): Promise<void> {
    await fetch(url, {
      method: 'DELETE',
    });
  }
  