# Backend de solicitudes DIALAC

## 1. Copiar archivos

Copia el contenido de esta carpeta dentro de `backend/`. La estructura debe quedar así:

```text
backend/
├── app/
│   ├── core/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── __init__.py
│   └── main.py
├── .env.example
└── requirements.txt
```

No copies ni reemplaces la carpeta `.venv`.

## 2. Crear el archivo de variables

Duplica `.env.example`, renómbralo como `.env` y conserva inicialmente:

```env
FRONTEND_URL=http://localhost:5173
PRODUCT_CATALOG_DIR=../frontend/src/data/products
EMAIL_ENABLED=false
```

Con `EMAIL_ENABLED=false` puedes probar la validación y generación del PDF sin enviar correos.

## 3. Instalar dependencias

Desde `backend/`, con el entorno virtual activado:

```powershell
pip install -r requirements.txt
```

## 4. Ejecutar

```powershell
uvicorn app.main:app --reload
```

Comprueba:

- `http://localhost:8000/api/health`
- `http://localhost:8000/docs`

## 5. Activar correo más adelante

Cuando esté configurada la cuenta de Resend:

```env
EMAIL_ENABLED=true
RESEND_API_KEY=re_...
DIALAC_REQUEST_EMAIL=correo-que-recibe@dialac.com
EMAIL_FROM=DIALAC <solicitudes@dominio-verificado.com>
```

Para producción, `EMAIL_FROM` debe utilizar un dominio verificado en Resend.
